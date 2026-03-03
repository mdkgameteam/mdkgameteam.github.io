/*
  # Crear tablas para contactos y proyectos

  1. Nuevas Tablas
    - `contacts`
      - `id` (uuid, primary key)
      - `nombre` (text)
      - `email` (text)
      - `mensaje` (text)
      - `created_at` (timestamptz)
    
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `image` (text)
      - `tags` (text array)
      - `description` (text)
      - `created_at` (timestamptz)
  
  2. Seguridad
    - Enable RLS en ambas tablas
    - Policy para insertar contactos (público)
    - Policy para leer proyectos (público)
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  email text NOT NULL,
  mensaje text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image text NOT NULL,
  tags text[] DEFAULT '{}',
  description text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cualquiera puede insertar contactos"
  ON contacts FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Cualquiera puede leer proyectos"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Admin puede gestionar proyectos"
  ON projects FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);