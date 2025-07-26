// Auto-generated index.ts for Pages Functions routing
import type { Request } from 'itty-router';

import { TemplateSelectionBackendHandler } from './TemplateSelectionBackend';
import { AIContentSuggestionsBackendHandler } from './AIContentSuggestionsBackend';
import { UserAuthenticationBackendHandler } from './UserAuthenticationBackend';
import { UserDataStorageBackendHandler } from './UserDataStorageBackend';

export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === "/api/TemplateSelectionBackend") return TemplateSelectionBackendHandler(request);
  if (path === "/api/AIContentSuggestionsBackend") return AIContentSuggestionsBackendHandler(request);
  if (path === "/api/UserAuthenticationBackend") return UserAuthenticationBackendHandler(request);
  if (path === "/api/UserDataStorageBackend") return UserDataStorageBackendHandler(request);

  return new Response("Not found", { status: 404 });
}
