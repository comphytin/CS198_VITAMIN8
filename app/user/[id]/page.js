// TODO 4: Create app/user/[id]/page.js

// Hint: Dynamic route pages receive params as a prop
export default async function UserProfile({ params }) {
  // Access params.id here
  const { id } = await params;
  return <h1>User Profile: {id}</h1>;
}