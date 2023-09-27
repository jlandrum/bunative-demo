import c from 'colors';

import { add, sub, div, fibonacci } from "./src/c/math.c";
import { cstrcat } from "./src/c/strings.c";

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

