export async function UserDataStorageBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const contentType = req.headers.get('Content-Type') || '';
    if (!contentType.includes('application/json')) {
      return new Response('Unsupported Media Type', { status: 415 });
    }

    const body = await req.json();

    // Validate the expected fields in the request body.
    if (!body.userId || typeof body.userId !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid user ID' }), { status: 400 });
    }
    if (!body.data || typeof body.data !== 'object') {
      return new Response(JSON.stringify({ error: 'Invalid data format' }), { status: 400 });
    }

    // Simulate storing data (e.g., into a database or KV store)
    // In a real-world application, replace this with actual database logic.
    const storageResult = simulateDataStorage(body.userId, body.data);

    if (!storageResult.success) {
      return new Response(JSON.stringify({ error: 'Failed to store data' }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Data stored successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}

function simulateDataStorage(userId: string, data: object): { success: boolean } {
  // This is a placeholder function for storing data.
  // Assume the data storage operation is successful.
  return { success: true };
}
