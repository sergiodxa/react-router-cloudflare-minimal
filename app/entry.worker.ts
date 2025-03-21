import { createRequestHandler } from "react-router";

// @ts-expect-error - no types
import * as build from "virtual:react-router/server-build";

const handler = createRequestHandler(build);

export default {
  async fetch(request: Request) {
    return await handler(request);
  },
};
