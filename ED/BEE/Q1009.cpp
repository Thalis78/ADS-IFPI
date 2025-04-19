#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;

int main () {
    string nome;
    double salarioFixo,venda;

    cin >> nome;
    cin >> salarioFixo;
    cin >> venda;

    printf("TOTAL = R$ %.2f\n",salarioFixo + (venda * 0.15));
}