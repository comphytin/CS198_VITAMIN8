import { createClient } from '@supabase/supabase-js'
import { create } from 'node:domain';

// This uses the secret service role key, only works on server!
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
// TODO: Create the admin client
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

/*

*/