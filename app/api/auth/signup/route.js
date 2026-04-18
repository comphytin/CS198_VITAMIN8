import { supabase } from '../../../../lib/supabase'

export async function POST(request) {
  try {
    // TODO:
    // 1. Get email and password from request.json()
    const {email, password} = await request.json();
    if (!email || !password) {
      return Response.json( 
        {error: 'Email and password are required'},
        {status: 400}
      );
    }
    // 2. Call supabase.auth.signUp({ email, password })
    const {data, error} = supabase.auth.signUp({email, password});
    // 3. Return the result as JSON
    if (error) {
      return Response.json(
        {error: error.message},
        {status: 400}
      );
    }
    return Response.json({ 
      message: 'User created successfully',
      user: data.user
    },
    { status: 201 }
  );
    // 4. Use appropriate status codes (201 for success, 400 for error)
  } catch (error) {
      return Response.json(
        { error: 'Internal server error'},
        { status: 500}
      );
  }


}