#include <iostream>
#include <algorithm>
#include <cmath>
using namespace std;

int main() {
    int horasInicio, minutosInicial, horasFinais, minutosFinal, duracao, minutos, horas;

    cin >> horasInicio >> minutosInicial >> horasFinais >> minutosFinal;

    duracao = ((horasFinais * 60) + minutosFinal) - ((horasInicio * 60) + minutosInicial);
    if (duracao <= 0) {
        duracao += 24 * 60;
    }

    horas = duracao / 60;
    minutos = duracao % 60;

    printf("O JOGO DUROU %d HORA(S) E %d MINUTO(S)\n", horas, minutos);

    return 0;
}
