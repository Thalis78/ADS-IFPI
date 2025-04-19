#include <iostream>
#include <string>

using namespace std;

int main() {
    int turistas = 0;
    int jipes = 0;
    string entrada;

    while (true) {
        cin >> entrada;

        if (entrada == "ABEND") {
            break;
        }

        int numTuristas;
        cin >> numTuristas;

        if (entrada == "SALIDA") {
            jipes++;
            turistas += numTuristas;
        } else if (entrada == "VUELTA") {
            jipes--;
            turistas -= numTuristas;
        }
    }

    cout << turistas << endl;
    cout << jipes << endl;

    return 0;
}
