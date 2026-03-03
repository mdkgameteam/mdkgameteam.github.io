import React from 'react';

function AboutLong() {
  return (
    <div className="prose prose-invert text-gray-300">
      <h2 className="border-l-4 border-neon-pink pl-6 text-2xl font-extrabold">
        Acerca de MDK Game Team
      </h2>
      <p>¡Hola a todos! Nos complace darles la bienvenida al equipo de MDK, un grupo apasionado dedicado al desarrollo de contenido en Minecraft para creadores y la comunidad.</p>
      <p>Con una amplia experiencia en la configuración de plugins, mods y cinemáticas, nos enorgullece ofrecer un contenido único y de calidad.</p>
      <p>¿Deseas explorar más sobre nuestros emocionantes proyectos? En esta página, encontrarás información detallada sobre nuestro trabajo y descubrirás todo lo que tenemos para ofrecerte.</p>
      <h3>Historia</h3>
      <p>MDK Game Team fue fundado por "DexQuinto" y "Maicar" en 2022, creando su primer evento/proyecto llamado "DeathSafio" un evento basado completamente en "DEDSAFIO" de Eufonia Studios, poco a poco fueron siendo conocidos por la comunidad.</p>
      <p>Actualmente MDK sigue desarrollando eventos para su comunidad y creadores de contenido, mejorando su calidad de trabajo a traves de los dias y eventos desarrollandos.</p>
    </div>
  );
}

export default React.memo(AboutLong);
