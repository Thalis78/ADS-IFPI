#include <iostream>
using namespace std;

int main() {
    double a,b,c,perimetro,area;

    cin >> a >> b >> c;

    perimetro = a + b + c;
    area = ((a+b)*c)/2;

    if((a + c > c) && (a + c > b) && (b+c > a)) {
        printf("Perimetro = %.1f\n",perimetro);
    }else {
        printf("Area = %.1f\n",area);
    }
}
