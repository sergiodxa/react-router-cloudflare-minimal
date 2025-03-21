import type { ExportedHandler } from "@cloudflare/workers-types";
import { createRequestHandler } from "react-router";

// @ts-expect-error - no types
import * as build from "virtual:react-router/server-build";

const handler = createRequestHandler(build);

export default {
  async fetch(request) {
    return await handler(request);
  },
} satisfies ExportedHandler;
