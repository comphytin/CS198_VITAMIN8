import { supabase } from '../../../../lib/supabase'

export async function POST(request) {
  // TODO: Call supabase.auth.signOut() and return result
  try {
    const {error} = await supabase.auth.signOut();

    if (error) {
      return Response.jsono(
        {error: error.message},
        {status: 400}
      );
    }

    return Response.json(
      {message: "You've successfully signed out of this account."},
      {status: 200}
    );
  } catch (error) {
    return Response.json(
        { error: 'Internal server error'},
        { status: 500}
      );
  }
}