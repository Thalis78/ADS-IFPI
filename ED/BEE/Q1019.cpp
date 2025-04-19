#include <iostream>
using namespace std;

int main() {
    int segundos, horas, minutos;

    cin >> segundos;

    horas = segundos / 3600;
    segundos %= 3600;
    minutos = segundos / 60;
    segundos %= 60;
    printf("%d:%d:%d\n", horas, minutos, segundos);

    return 0;
}
