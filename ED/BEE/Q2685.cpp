#include <iostream>
using namespace std;

int main() {
    int fusoHorario;

    while (cin >> fusoHorario) {
        if (fusoHorario < 0 || fusoHorario > 360) {
            continue;
        }

        if (fusoHorario<90 || fusoHorario==360)
            printf("Bom Dia!!\n");

        else if (fusoHorario<180)
            printf("Boa Tarde!!\n");

        else if (fusoHorario<270)
            printf("Boa Noite!!\n");

        else if (fusoHorario<360)
            printf("De Madrugada!!\n");
    }

    return 0;
}
