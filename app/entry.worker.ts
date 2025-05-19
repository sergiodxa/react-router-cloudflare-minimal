import type { unstable_InitialContext } from "react-router";
import { createRequestHandler } from "react-router";
import * as build from "virtual:react-router/server-build";
import { CloudflareContext } from "./middleware/cloudflare.server";

const handler = createRequestHandler(build);

export default {
  async fetch(request: Request, env: Cloudflare.Env, ctx: ExecutionContext) {
    let context: unstable_InitialContext = new Map();
    context.set(CloudflareContext, { env, ctx, cf: request.cf });
    return await handler(request, context);
  },
};
