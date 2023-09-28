fun k_add(a: Int, b: Int): Int = a+b

fun k_greet(c: String): String {
  return "Greetings... $c!"
}

fun k_reverse(string: String): String = string.reversed()

fun k_isPrime(num: Int): Boolean {
    if (num <= 1)
        return false

    for (i in 2 until num) {
        if (num % i == 0)
            return false
    }

    return true
}

fun k_countPrimes(n: Int): Int {
    var count = 0
    var num = 2

    while (count < n) {
        if (k_isPrime(num)) {
            count++
        }
        num++
    }

    return num
}