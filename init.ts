import { plugin } from "bun";
import { clang, konan } from "bunative";
import clangConfig from './src/c/build';
import konanConfig from './src/kotlin/build';

plugin(
  clang({
    verbosity: 'vvv',
    buildConfig: clangConfig,
  })
);
plugin(
  konan({
    verbosity: 'vvvv',
    buildConfig: konanConfig,
  })
);