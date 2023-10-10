import { NativeModuleConfigSet, KonanNativeModule } from "bunative";

export default {
  global: {
    optimize: true,
    libraries: [],
    debug: false,
    additionalSources: [],
  },
  "main.kt": {
    // out: "./out/main.o",
  },
} as NativeModuleConfigSet<KonanNativeModule>;
