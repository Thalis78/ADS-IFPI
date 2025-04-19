#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;

int main () {
    double base,base2,altura,triangulo,circulo,trapezio,quadrado,retangulo,pi = 3.14159;
    cin >> base >> base2 >> altura;

    triangulo = (base * altura)/2;
    circulo = pi * (altura * altura);
    trapezio = ((base + base2) * altura)/2;
    quadrado = base2 * base2;
    retangulo = base * base2;

    printf("TRIANGULO: %.3f\n", triangulo);
    printf("CIRCULO: %.3f\n", circulo);
    printf("TRAPEZIO: %.3f\n", trapezio);
    printf("QUADRADO: %.3f\n", quadrado);
    printf("RETANGULO: %.3f\n", retangulo);

}