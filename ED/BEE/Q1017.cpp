#include <cmath>
#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;

int main () {
    double gasto_viagem,velocidade_media;

    cin >> gasto_viagem;
    cin >> velocidade_media;

    float litros = (gasto_viagem * velocidade_media)/12;
    printf("%.3f\n", litros);
}