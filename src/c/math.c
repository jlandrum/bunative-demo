int add(int a, int b) {
  return a + b;
}

int sub(int a, int b) {
  return a - b;
};

float div(float a, float b) {
  return a / b;
}

int fibonacci(int n)
{
  long i;
  long fib[n];

  fib[0] = 0;
  fib[1] = 1;

  for (i = 2; i < n; i++)
  {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n - 1];
}

int isPrime(int num)
{
  if (num <= 1)
    return 0;

  for (int i = 2; i * i <= num; i++)
  {
    if (num % i == 0)
      return 0;
  }

  return 1;
}

int countPrimes(int n)
{
  int count = 0;
  int num = 2;
  
  for (; count < n; num++)
  {
    if (isPrime(num))
    {
      count++;
    }
  }

  return num-1;
}