import { supabase } from '../../../../lib/supabase'

export async function POST(request) {
  // TODO:
  // 1. Get email and password from request.json()
  // 2. Call supabase.auth.signInWithPassword({ email, password })
  // 3. Return the result as JSON
  try {
    const {email, password} = await request.json();
    const {data, error} = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      return Response.json(
        {error: 'Invalid email or password'},
        {status: 400}
      );
    }
    return Response.json(
      {
        message: 'User successfully logged in',
        user: data.user,
        session: data.session
      },
      {status: 200}
    )
  } catch (error) {
    return Response.json(
        { error: 'Internal server error'},
        { status: 500}
      );
  }
}