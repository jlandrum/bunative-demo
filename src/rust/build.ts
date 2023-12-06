import { NativeModuleConfigSet, RustNativeModule } from "bunative";

export default {
  global: {
    optimize: 0,
    debug: false,
    additionalSources: [],
  },
  "math.rs": {},
  "primesieve.rs": {},
} as NativeModuleConfigSet<RustNativeModule>;
