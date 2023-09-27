#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* cstrcat(char* a, char* b) {
  int size = strlen(a) + strlen(b) + 1; // +1 for the null terminator
  char *result = malloc(size * sizeof(char));

  strcpy(result, a);
  strcat(result, b);

  return result;
}