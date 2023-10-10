import c from 'colors';

import { add, sub, div, fibonacci } from "./c/math.c";
import { cstrcat } from "./c/strings.c";
import { k_add, k_greet, k_reverse } from './kotlin/main.kt';
import { add as r_add} from './rust/math.rs';

console.log(c.blue.bold('== C: Code Tests =='));

console.log(c.blue('C: Testing Integers'));

console.log(`4 + 6 = ${add(4,6)}`);
console.log(`43 - 8 = ${sub(43,8)}`);
console.log(`100th Fibonacci = ${fibonacci(100)}`);

console.log(c.blue('C: Testing Floats'));

console.log(`10 / 6 = ${div(10,6)}`);
console.log(`10 / 0 = ${div(10,0)}`);

// TODO: Buffer.from(string) may have a bug.
console.log(c.blue('C: Testing String Buffers'));
console.log(`'abc' + 'def' = ${cstrcat(Buffer.from("abc"), Buffer.from("def")).toString().replace('', ' ')}`);

// TODO: Generate code to accept string parameters.
console.log(c.blue('C: Testing Array Buffers'));
console.log(`'abc' + 'def' = ${cstrcat(Buffer.from([0x61, 0x62, 0x63]), Buffer.from([0x64, 0x65, 0x66])).toString().replace('', ' ')}`);

console.log(c.magenta.bold('== Rust: Code Tests =='));
console.log(c.magenta('C: Testing Integers'));

console.log(`12 + 33 = ${r_add(12, 33)}`);

console.log(c.red.bold('== Kotlin: Code Tests =='));

console.log(c.red('C: Testing Integers'));
console.log(`420 + 69 = ${k_add(420,69)}`);

console.log(c.red('C: Testing String Buffers'));
console.log(`Greetings: ${k_greet(Buffer.from("X"))}`);
console.log(`Reverse of "Interpolate" = ${k_reverse(Buffer.from("Interpolate"))}`);

