int add(int a, int b) {
  return a + b;
}

int sub(int a, int b) {
  return a - b;
}

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