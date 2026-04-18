import { createClient } from '@supabase/supabase-js'

// These NEXT_PUBLIC_ variables work here because this file
// can be imported by client components
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// TODO: Create the client using createClient()
export const supabase = createClient(supabaseUrl, supabaseAnonKey);