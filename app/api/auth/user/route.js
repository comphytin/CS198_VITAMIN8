import { supabase } from '../../../../lib/supabase'

export async function GET(request) {
  try {
    // Call supabase.auth.getUser() - NEEDS AWAIT
    const { data, error } = await supabase.auth.getUser();
    
    if (error) {
      return Response.json(
        { error: "Could not retrieve user data" },
        { status: 400 }
      );
    }
    
    return Response.json(
      {
        message: "User data has been retrieved.",
        user: data.user
      },
      { status: 200 }  // 200 OK is better than 201 for GET
    );
    
  } catch (error) {
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}