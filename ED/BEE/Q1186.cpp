#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    double M[12][12];
    double soma = 0;
    int cont = 0;
    int inicio = 11;
    int fim = 11;

    char oper;
    cin >> oper;

    for (int linha = 0; linha < 12; linha++) {
        for (int coluna = 0; coluna < 12; coluna++) {
            cin >> M[linha][coluna];
        }
    }

    for (int linha = 1; linha < 12; linha++) {
        for (int coluna = inicio; coluna <= fim; coluna++) {
            soma += M[linha][coluna];
            cont++;
        }
        inicio--;
    }

    if (oper == 'M') {
        soma /= cont;
    }

    cout << fixed << setprecision(1) << soma << endl;

    return 0;
}
