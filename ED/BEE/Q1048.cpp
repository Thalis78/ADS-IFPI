#include <iostream>
#include <algorithm>
#include <cmath>
using namespace std;

int main() {
    double salario,aumento;
    int percentual;
    double porcentagem[5] = {0.15,0.12,0.10,0.07,0.04};

    cin >> salario;

    aumento = salario <= 400 ? salario * porcentagem[0] : salario <= 800 ? salario * porcentagem[1] : salario <= 1200? salario * porcentagem[2] : salario <= 2000 ? salario * porcentagem[3] : salario * porcentagem[4];

    percentual = salario <= 400 ? 15 : salario <= 800 ? 12 : salario <= 1200? 10 : salario <= 2000 ? 7 : 4;


    printf("Novo salario: %.2f\n",salario + aumento);
    printf("Reajuste ganho: %.2f\n",aumento);
    cout << "Em percentual: " << percentual << " %" << endl;

    return 0;
}
