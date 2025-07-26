import { UserAuthenticationBackendHandler } from './UserAuthenticationBackend';

export async function UserAuthenticationBackendHandler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  let requestBody;
  try {
    requestBody = await req.json();
  } catch (error) {
    return new Response('Invalid JSON', { status: 400 });
  }

  const { username, password } = requestBody;

  if (!username || !password) {
    return new Response('Username and password are required', { status: 400 });
  }

  const isAuthenticated = await authenticateUser(username, password);

  if (!isAuthenticated) {
    return new Response('Unauthorized', { status: 401 });
  }

  const token = generateAuthToken(username);

  return new Response(JSON.stringify({ token }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function authenticateUser(username: string, password: string): Promise<boolean> {
  // Simulate authentication logic, replace with real user check in production.
  const validUsers = [{ username: 'user1', password: 'password1' }];
  return validUsers.some(user => user.username === username && user.password === password);
}

function generateAuthToken(username: string): string {
  // Simple token generation for demonstration, replace with a secure method in production.
  return btoa(`${username}:${new Date().getTime()}`);
}
