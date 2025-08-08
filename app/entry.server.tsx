import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";
import type {
  EntryContext,
  unstable_RouterContextProvider,
} from "react-router";
import { ServerRouter } from "react-router";

export default async function handleRequest(
  request: Request,
  status: number,
  headers: Headers,
  entryContext: EntryContext,
  _routerContext: unstable_RouterContextProvider
) {
  let userAgent = request.headers.get("user-agent");

  let stream = await renderToReadableStream(
    <ServerRouter context={entryContext} url={request.url} />,
    {
      signal: request.signal,
      onError(error) {
        console.error(error);
        // biome-ignore lint/style/noParameterAssign: It's ok
        status = 500;
      },
    }
  );

  if (userAgent && isbot(userAgent)) await stream.allReady;
  else headers.set("Transfer-Encoding", "chunked");

  headers.set("Content-Type", "text/html; charset=utf-8");

  return new Response(stream, { status, headers });
}
