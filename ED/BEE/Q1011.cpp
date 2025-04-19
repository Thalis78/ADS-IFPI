#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;

int main () {
    int raio;
    double pi = 3.14159;

    cin >> raio;

    double volume = (4.0 / 3.0) * pi * raio * raio * raio;

    printf("VOLUME = %.3f",volume);

    return 0;
}