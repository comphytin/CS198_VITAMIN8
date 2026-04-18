import { supabaseAdmin } from '../../../../lib/supabase-server'

export async function GET(request) {
  try {
    const { data, error } = await supabaseAdmin.auth.signInWithOAuth({ 
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/dashboard`
      }
    });
    
    if (error) throw error;
    
    // Redirect directly to Google - NOT return JSON
    return Response.redirect(data.url);
    
  } catch (error) {
    // If something fails, redirect to login page with error
    const errorUrl = new URL('/login', request.url);
    errorUrl.searchParams.set('error', error.message);
    return Response.redirect(errorUrl);
  }
}