#include <iostream>
using namespace std;

int main() {
    double valor;
    cin >> valor;

    int dinheiro = (int)valor;               
    int centavos = (valor - dinheiro) * 100;

    int nota_cem = dinheiro / 100;
    dinheiro %= 100;
    int nota_cinquenta = dinheiro / 50;
    dinheiro %= 50;
    int nota_vinte = dinheiro / 20;
    dinheiro %= 20;
    int nota_dez = dinheiro / 10;
    dinheiro %= 10;
    int nota_cinco = dinheiro / 5;
    dinheiro %= 5;
    int nota_dois = dinheiro / 2;
    dinheiro %= 2;
    
    int moeda_um = dinheiro; 
    int moeda_cinquenta = centavos / 50;
    centavos %= 50;
    int moeda_vinteCinco = centavos / 25;
    centavos %= 25;
    int moeda_dez = centavos / 10;
    centavos %= 10;
    int moeda_cinco = centavos / 5;
    centavos %= 5;
    int moeda_umCentavo = centavos;

    printf("NOTAS:\n");
    printf("%d nota(s) de R$ 100.00\n", nota_cem);
    printf("%d nota(s) de R$ 50.00\n", nota_cinquenta);
    printf("%d nota(s) de R$ 20.00\n", nota_vinte);
    printf("%d nota(s) de R$ 10.00\n", nota_dez);
    printf("%d nota(s) de R$ 5.00\n", nota_cinco);
    printf("%d nota(s) de R$ 2.00\n", nota_dois);

    printf("MOEDAS:\n");
    printf("%d moeda(s) de R$ 1.00\n", moeda_um);
    printf("%d moeda(s) de R$ 0.50\n", moeda_cinquenta);
    printf("%d moeda(s) de R$ 0.25\n", moeda_vinteCinco);
    printf("%d moeda(s) de R$ 0.10\n", moeda_dez);
    printf("%d moeda(s) de R$ 0.05\n", moeda_cinco);
    printf("%d moeda(s) de R$ 0.01\n", moeda_umCentavo);

    return 0;
}
