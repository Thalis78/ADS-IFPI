#include <iostream>
using namespace std;

int main() {
    double preco[5] = {4.0,4.50,5.0,2.0,1.50};
    int codigo, quant;

    cin >> codigo >> quant;

    double valor_total = preco[codigo-1] * quant;
    printf("Total: R$ %.2f\n",valor_total);
}
