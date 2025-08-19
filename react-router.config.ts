import type { Config } from "@react-router/dev/config";
import "react-router";

export default {
  future: {
    unstable_middleware: true,
    unstable_optimizeDeps: true,
    unstable_splitRouteModules: true,
    unstable_viteEnvironmentApi: true,
  },
} satisfies Config;
