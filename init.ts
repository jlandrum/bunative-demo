import { plugin } from "bun";
import { clang } from "bunative";
import clangConfig from './src/c/build';

plugin(
  clang({
    verbosity: 'vvv',
    buildConfig: clangConfig,
  })
);