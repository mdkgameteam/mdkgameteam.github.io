import React, { useEffect, useState } from 'react';
import { Home, Mail, Gamepad2, LogOut, Menu, X, Plus, Trash2, Search } from 'lucide-react';
import logo from '../MDKby.png';
import { supabase } from '../lib/supabase';

type Contact = { id: string; nombre: string; email: string; mensaje: string; created_at?: string };
type Project = { id: string; title: string; image: string; tags: string[]; description?: string };

function AdminPage() {
  // use Supabase session state instead of homemade password
  const [user, setUser] = useState<any>(null);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const auth = !!user;
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [fetchingData, setFetchingData] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [form, setForm] = useState({ title: '', image: '', tags: '', description: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false); // used during project operations

  // initialize authentication state and refetch when user changes
  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log('auth changed:', auth, 'user:', user);
    if (!auth) return;
    fetchData();

    // subscribe using the v2 realtime API (postgres_changes channel)
    const channel = supabase
      .channel('contacts_changes')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'contacts' }, (payload) => {
        setContacts((prev) => [{ ...(payload.new as Contact) }, ...prev]);
      })
      .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'contacts' }, (payload) => {
        setContacts((prev) => prev.filter((c) => c.id !== (payload.old as Contact).id));
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [auth, user]);

  const fetchData = async () => {
    setFetchingData(true);
    setFetchError(null);
    try {
      const [contactsRes, projectsRes] = await Promise.all([
        supabase.from('contacts').select('*').order('created_at', { ascending: false }),
        supabase.from('projects').select('*').order('created_at', { ascending: false })
      ]);

      if (contactsRes.error) throw contactsRes.error;
      if (projectsRes.error) throw projectsRes.error;

      setContacts(contactsRes.data || []);
      setProjects(projectsRes.data || []);
    } catch (err: any) {
      console.error('Error fetching data:', err);
      setFetchError(err.message || String(err));
    } finally {
      setFetchingData(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailInput,
        password: passwordInput
      });
      if (error) throw error;
      setEmailInput('');
      setPasswordInput('');
      // if login succeeds the listener will fire eventually but update immediately too
      if (data?.user) setUser(data.user);
    } catch (err: any) {
      alert(err.message || 'Error al iniciar sesión');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setActiveSection('dashboard');
  };

  const removeContact = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contacts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setContacts((prev) => prev.filter(c => c.id !== id));
    } catch (err) {
      console.error('Error deleting contact:', err);
    }
  };

  const handleProjectAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingId) {
        // update existing project
        const { data, error } = await supabase
          .from('projects')
          .update({
            title: form.title,
            image: form.image,
            tags: form.tags.split(',').map((s) => s.trim()).filter(Boolean),
            description: form.description,
          })
          .eq('id', editingId)
          .select();
        if (error) throw error;
        if (data && data[0]) {
          setProjects((prev) => prev.map((p) => (p.id === editingId ? data[0] : p)));
        }
        alert('Proyecto actualizado exitosamente');
      } else {
        const { data, error } = await supabase
          .from('projects')
          .insert([
            {
              title: form.title,
              image: form.image,
              tags: form.tags.split(',').map((s) => s.trim()).filter(Boolean),
              description: form.description,
            },
          ])
          .select();

        if (error) throw error;
        if (data) {
          setProjects([data[0], ...projects]);
        }
        alert('Proyecto agregado exitosamente');
      }
      setForm({ title: '', image: '', tags: '', description: '' });
      setEditingId(null);
    } catch (err) {
      console.error(editingId ? 'Error updating project:' : 'Error adding project:', err);
      alert(editingId ? 'Error al actualizar proyecto' : 'Error al agregar proyecto');
    } finally {
      setLoading(false);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setProjects(projects.filter(p => p.id !== id));
    } catch (err) {
      console.error('Error deleting project:', err);
    }
  };

  if (!auth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-neon-blue flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neon-cyan">
                <img src={logo} alt="MDK Logo" className="w-full h-full object-cover" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white text-center mb-2">MDK Game Team</h1>
            <p className="text-gray-400 text-center mb-8">Panel de Administrador</p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-medium">Email</label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="tu@ejemplo.com"
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/50 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-medium">Contraseña</label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Ingresa tu contraseña"
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/50 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-neon-cyan to-blue-500 hover:from-blue-500 hover:to-neon-cyan text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/50"
              >
                Ingresar
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-6">
              Usa tu cuenta de Supabase para acceder
            </p>
          </div>
        </div>
      </div>
    );
  }

  const sectionsNav = [
    { id: 'dashboard', label: 'Panel Principal', icon: Home },
    { id: 'contactos', label: 'Contactos', icon: Mail },
    { id: 'proyectos', label: 'Proyectos', icon: Gamepad2 },
  ];

  const filteredContacts = contacts.filter(
    (c) =>
      c.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.mensaje.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // use the projects state directly; the previous code referenced a non-existent
  // `category` object so the admin list was always empty.
  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (auth && fetchingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Cargando datos…</div>
      </div>
    );
  }

  if (auth && fetchError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-red-400">Error cargando datos: {fetchError}</div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-neon-blue/10 flex">
      {/* SIDEBAR */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } bg-gradient-to-b from-slate-900 to-slate-800 border-r border-slate-700/50 transition-all duration-300 overflow-hidden flex flex-col`}
      >
        <div className="p-6 border-b border-slate-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden border border-neon-cyan">
              <img src={logo} alt="MDK" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-white font-bold">Panel Admin</h2>
              <p className="text-xs text-gray-400">{user?.email || ''}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {sectionsNav.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-neon-cyan to-blue-500 text-white shadow-lg shadow-neon-cyan/50'
                    : 'text-gray-300 hover:bg-slate-700/50 hover:text-neon-cyan'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{section.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-700/50">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded-lg transition-all duration-200"
          >
            <LogOut size={18} />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-auto">
        {/* TOP BAR */}
        <div className="bg-slate-900/50 backdrop-blur border-b border-slate-700/50 sticky top-0 z-40 px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-400 hover:text-neon-cyan transition-colors"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-400">
                Panel Admin / <span className="text-neon-cyan">{sectionsNav.find((s) => s.id === activeSection)?.label}</span>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          {/* DASHBOARD */}
          {activeSection === 'dashboard' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-neon-cyan rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-4 rounded-lg">
                    <Home size={28} />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold mb-2">Bienvenido al Panel</h1>
                    <p className="text-blue-100">Desde aquí puedes editar tu sitio web fácilmente.</p>
                    <p className="text-blue-100">Usa el menú lateral para navegar por las secciones y presiona "Guardar cambios" cuando termines.</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-neon-cyan transition-all">
                  <Mail className="text-neon-cyan mb-3" size={24} />
                  <h3 className="text-gray-300 text-sm font-medium mb-1">Contactos</h3>
                  <p className="text-3xl font-bold text-white">{contacts.length}</p>
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-neon-cyan transition-all">
                  <Gamepad2 className="text-neon-cyan mb-3" size={24} />
                  <h3 className="text-gray-300 text-sm font-medium mb-1">Proyectos</h3>
                  <p className="text-3xl font-bold text-white">{projects.length}</p>
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-neon-cyan transition-all">
                  <Home className="text-neon-cyan mb-3" size={24} />
                  <h3 className="text-gray-300 text-sm font-medium mb-1">Estado</h3>
                  <p className="text-3xl font-bold text-neon-cyan">Activo</p>
                </div>
              </div>
            </div>
          )}

          {/* CONTACTOS */}
          {activeSection === 'contactos' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">Gestionar Contactos</h1>
                <p className="text-gray-400">Gestiona todos los contactos recibidos</p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 flex items-center space-x-3">
                <Search size={20} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Buscar contactos por nombre, email o mensaje..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                />
              </div>

              {filteredContacts.length === 0 ? (
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center">
                  <Mail size={32} className="mx-auto text-gray-500 mb-3" />
                  <p className="text-gray-400">No hay contactos que mostrar</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredContacts.map((c, i) => (
                    <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-neon-cyan/50 transition-all">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-white font-semibold">{c.nombre}</h3>
                          <p className="text-sm text-neon-cyan">{c.email}</p>
                        </div>
                        <button
                          onClick={() => removeContact(c.id)}
                          className="p-2 bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded-lg transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-gray-300 mb-2">{c.mensaje}</p>
                      <p className="text-xs text-gray-500">{c.created_at}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* PROYECTOS */}
          {activeSection === 'proyectos' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">Gestionar Proyectos</h1>
                <button
                  onClick={() => {
                    setEditingId(null);
                    setForm({ title: '', image: '', tags: '', description: '' });
                  }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500 text-white px-4 py-2 rounded-lg font-medium transition-all"
                >
                  <Plus size={20} />
                  <span>Nuevo Proyecto</span>
                </button>
              </div>

              {/* FORM */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-4">
                <h2 className="text-lg font-semibold text-white">{editingId ? 'Editar proyecto' : 'Crear nuevo proyecto'}</h2>
                <form onSubmit={handleProjectAdd} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                      placeholder="Título del proyecto"
                      className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan"
                      required
                    />
                    <input
                      type="text"
                      value={form.image}
                      onChange={(e) => setForm({ ...form, image: e.target.value })}
                      placeholder="URL de imagen"
                      className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan"
                    />
                  </div>
                  <input
                    type="text"
                    value={form.tags}
                    onChange={(e) => setForm({ ...form, tags: e.target.value })}
                    placeholder="Tags separados por comas (ej: Evento, Minecraft)"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan"
                  />
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Descripción del proyecto"
                    rows={3}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan resize-none"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`bg-gradient-to-r from-neon-cyan to-blue-500 hover:from-blue-500 hover:to-neon-cyan text-white px-6 py-2 rounded-lg font-medium transition-all ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {loading ? 'Guardando...' : 'Agregar Proyecto'}
                    </button>
                  </div>
                </form>
              </div>

              {/* PROYECTO LIST */}
              <div>
                <div className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 flex items-center space-x-3 mb-4">
                  <Search size={20} className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="Buscar proyectos por título o descripción..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {filteredProjects.map((p) => (
                    <div key={p.id} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-neon-cyan/50 transition-all group">
                      <div className="relative aspect-video overflow-hidden bg-slate-700">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-white font-bold mb-1">{p.title}</h3>
                        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{p.description}</p>
                        <div className="flex gap-2 mb-3 flex-wrap">
                          {p.tags.slice(0, 2).map((t, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-neon-cyan/20 text-neon-cyan rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setEditingId(p.id);
                              setForm({
                                title: p.title,
                                image: p.image,
                                tags: p.tags.join(', '),
                                description: p.description || '',
                              });
                              setActiveSection('proyectos');
                            }}
                            className="flex-1 flex items-center justify-center space-x-2 bg-yellow-600/20 hover:bg-yellow-600/40 text-yellow-300 py-2 rounded-lg transition-all"
                          >
                            <Plus size={16} className="transform rotate-45" />
                            <span className="text-sm">Editar</span>
                          </button>
                          <button
                            onClick={() => deleteProject(p.id)}
                            className="flex-1 flex items-center justify-center space-x-2 bg-red-600/20 hover:bg-red-600/40 text-red-400 py-2 rounded-lg transition-all"
                          >
                            <Trash2 size={16} />
                            <span className="text-sm">Eliminar</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default React.memo(AdminPage);
