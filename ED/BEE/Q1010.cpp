#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;

int main () {
    int cod_peca, quant_peca;
    double valor_peca, valor_total = 0.0;

    for(int i =0; i < 2; i++) {
        cin >> cod_peca >> quant_peca >> valor_peca;
        valor_total += quant_peca * valor_peca;
    }

    printf("VALOR A PAGAR: R$ %.2f\n",valor_total);
}