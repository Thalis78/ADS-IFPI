#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int horasInicio,horasFinal,duracao;

    cin >> horasInicio >> horasFinal;

    if(horasInicio < horasFinal) {
        duracao = horasFinal - horasInicio;
    }else {
        duracao = 24 - horasInicio + horasFinal;
    }

    printf("O JOGO DUROU %d HORA(S)\n",duracao);

    return 0;
}
