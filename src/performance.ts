import c from 'colors';

import { add, sub, div, fibonacci, countPrimes } from "./c/math.c";
import { cstrcat } from "./c/strings.c";
import { k_add, k_greet, k_reverse, k_countPrimes } from './kotlin/main.kt';
import { add as r_add, count_primes as r_countPrimes } from './rust/math.rs';

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

console.log(c.blue.bold('== Performance Tests =='));

[10, 100, 1000, 10000].forEach((count) => {
  console.time(c.green(`Bun: Calculated primes up to ${count}`));
  const jsprimes = js_countPrimes(count).toString();
  console.timeEnd(c.green(`Bun: Calculated primes up to ${count}`));

  console.time(c.blue(`C: Calculated primes up to ${count}`));
  const cprimes = countPrimes(count).toString();
  console.timeEnd(c.blue(`C: Calculated primes up to ${count}`));

  console.time(c.red(`Kotlin: Calculated primes up to ${count}`));
  const kprimes = k_countPrimes(count).toString();
  console.timeEnd(c.red(`Kotlin: Calculated primes up to ${count}`));

  console.time(c.magenta(`Rust: Calculated primes up to ${count}`));
  const rprimes = r_countPrimes(count).toString();
  console.timeEnd(c.magenta(`Rust: Calculated primes up to ${count}`));

  console.log(c.green(`Bun: ${jsprimes}`));
  console.log(c.blue(`C: ${cprimes}`));
  console.log(c.red(`Kotlin: ${kprimes}`));
  console.log(c.magenta(`Rust: ${rprimes}`));
});
