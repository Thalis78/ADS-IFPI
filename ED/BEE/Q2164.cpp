#include <stdio.h>
#include <math.h>

int main() {
    int n;

    scanf("%d", &n);
    
    double phi = (1 + sqrt(5)) / 2;
    double psi = (1 - sqrt(5)) / 2; 
    double fib_n = (1 / sqrt(5)) * (pow(phi, n) - pow(psi, n));

    printf("%.1lf\n", fib_n);

    return 0;
}