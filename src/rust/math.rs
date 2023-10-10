#[no_mangle]
pub extern "C" fn add(num1: i32, num2: i32) -> i32 {
    num1 + num2
}

#[no_mangle]
pub extern "C" fn fibonacci(n: u32) -> u64 {
    if n == 0 {
        return 0;
    }
    let mut a = 0;
    let mut b = 1;
    for _ in 2..=n {
        let tmp = a + b;
        a = b;
        b = tmp;
    }
    b
}

fn is_prime(num: u32) -> u32 {
    if num <= 1 {
        return 0;
    }
    for i in 2..=num / 2 {
        if num % i == 0 {
            return 0;
        }
    }
    return 1;
}

#[no_mangle]
pub extern "C" fn count_primes(n: u32) -> u32 {
    let mut count = 0;
    let mut num = 2;
    while count < n {
        if is_prime(num) != 0 {
            count += 1;
        }
        num += 1;
    }
    return num;
}

