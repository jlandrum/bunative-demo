export default {
  global: {
    optimize: 0,
    libraries: [],
    frameworks: [],
    debug: false,
    headerSearchPaths: [],
    libSearchPaths: [],
    additionalSources: [],
  },
  "math.c": {
    out: "./out/math.o",
    useHeader: "./math.h",
  },
} as NativeModuleConfigSet<ClangNativeModule>;
