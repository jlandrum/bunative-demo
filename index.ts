import c from 'colors';

import { add, sub, div, fibonacci, countPrimes } from "./src/c/math.c";
import { cstrcat } from "./src/c/strings.c";
import { k_add, k_greet, k_reverse, k_countPrimes } from './src/kotlin/main.kt';
import { CFunction, FFIType } from 'bun:ffi';

function js_isPrime(num: number) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function js_countPrimes(n: number) {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (js_isPrime(num)) {
      count++
    }
    num++;
  }
  return num;
}

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

console.log(c.red.bold('== Kotlin: Code Tests =='));

console.log(c.red('C: Testing Integers'));
console.log(`420 + 69 = ${k_add(420,69)}`);

console.log(c.red('C: Testing String Buffers'));
console.log(`Greetings: ${k_greet(Buffer.from("X"))}`);
console.log(`Reverse of "Interpolate" = ${k_reverse(Buffer.from("Interpolate"))}`);

console.log(c.blue.bold('== C: Performance Tests =='));

[10,100,1000,10000,10000].forEach((count) => {
  console.time(c.green(`Bun: Calculating primes up to ${count}`));
  console.log(c.green(js_countPrimes(count).toString()));
  console.timeEnd(c.green(`Bun: Calculating primes up to ${count}`));  
  
  console.time(c.blue(`C: Calculating primes up to ${count}`));
  console.log(c.blue(countPrimes(count).toString()));
  console.timeEnd(c.blue(`C: Calculating primes up to ${count}`));
  
  console.time(c.red(`Kotlin: Calculating primes up to ${count}`));
  console.log(c.red(k_countPrimes(count).toString()));
  console.timeEnd(c.red(`Kotlin: Calculating primes up to ${count}`));
});
