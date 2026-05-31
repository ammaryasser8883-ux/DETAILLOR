// Import the function used to create a Supabase client
import { createClient } from '@supabase/supabase-js';

// Read the Supabase project URL from .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;

// Read the Supabase publishable key from .env.local
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create a reusable Supabase client instance
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);