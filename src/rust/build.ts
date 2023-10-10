import { NativeModuleConfigSet, RustNativeModule } from "bunative";

export default {
  global: {
    optimize: 3,
    debug: false,
    additionalSources: [],
  },
  "math.rs": {},
} as NativeModuleConfigSet<RustNativeModule>;
