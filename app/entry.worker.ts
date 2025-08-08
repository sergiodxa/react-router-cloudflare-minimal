import type { RequestHandler } from "react-router";
import {
  unstable_RouterContextProvider,
  createRequestHandler,
} from "react-router";

let handler: RequestHandler | null = null;

export default {
  async fetch(request: Request) {
    // Dynamically import React Router server build
    // This helps reduce worker init time
    let build = await import("virtual:react-router/server-build");
    // Only create a request handler if `handler` is still null (first request)
    if (handler === null) handler = createRequestHandler(build);

    // Create a new router context for each request
    let context = new unstable_RouterContextProvider();

    // Call the handler with the request and context and return the response
    return await handler(request, context);
  },
} satisfies ExportedHandler<Cloudflare.Env>;
