import type { UserConfig } from "vitest/config";
import CustomEnvironment from "./custom-environment.js";

const config: UserConfig = {
  test: {
    environment: CustomEnvironment,
    globals: true,
  },
};

export default config;
