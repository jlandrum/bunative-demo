import { ClangNativeModule, NativeModuleConfigSet } from "bunative";

export default {
  global: {
    optimize: 3,
    libraries: [],
    frameworks: [],
    debug: false,
    headerSearchPaths: [],
    libSearchPaths: [],
    additionalSources: [],
  },
  "math.c": {
    out: "./out/c_math.o",
    useHeader: "./math.h",
  },
} as NativeModuleConfigSet<ClangNativeModule>;
