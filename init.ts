import { plugin } from "bun";
import { clang, konan, rust } from "bunative";
import clangConfig from './src/c/build';
import konanConfig from './src/kotlin/build';
import rustConfig from './src/rust/build';

plugin(
  clang({
    verbosity: 'vvv',
    buildConfig: clangConfig,
  })
);
plugin(
  konan({
    verbosity: 'vvv',
    buildConfig: konanConfig,
  })
);
plugin(
  rust({
    verbosity: 'vvv',
    buildConfig: rustConfig,
  })
);