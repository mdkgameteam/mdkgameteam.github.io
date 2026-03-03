import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Contact = {
  id: string;
  nombre: string;
  email: string;
  mensaje: string;
  created_at: string;
};

export type Project = {
  id: string;
  title: string;
  image: string;
  tags: string[];
  description: string;
  created_at: string;
};
