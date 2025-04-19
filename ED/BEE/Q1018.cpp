#include <cmath>
#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;

int main () {
    int dinheiro;

    cin >> dinheiro;

    int nota_cem = floor(dinheiro/100);
    int nota_cinqueta = floor((dinheiro - (100 * nota_cem))/50);
    int nota_vinte = floor((dinheiro - (100 * nota_cem) - (50 * nota_cinqueta))/20);
    int nota_dez = floor((dinheiro - (100 * nota_cem) - (50 * nota_cinqueta) - (20 * nota_vinte))/10);
    int nota_cinco = floor((dinheiro - (100 * nota_cem) - (50 * nota_cinqueta) - (20 * nota_vinte) - (10 * nota_dez))/5);
    int nota_dois = floor((dinheiro - (100 * nota_cem) - (50 * nota_cinqueta) - (20 * nota_vinte) - (10 * nota_dez) - (5 * nota_cinco))/2);
    int nota_um = floor((dinheiro - (100 * nota_cem) - (50 * nota_cinqueta) - (20 * nota_vinte) - (10 * nota_dez) - (5 * nota_cinco) - (2 * nota_dois))/1);

    printf("%d\n",dinheiro);
    printf("%d nota(s) de R$ 100,00\n",nota_cem);
    printf("%d nota(s) de R$ 50,00\n",nota_cinqueta);
    printf("%d nota(s) de R$ 20,00\n",nota_vinte);
    printf("%d nota(s) de R$ 10,00\n",nota_dez);
    printf("%d nota(s) de R$ 5,00\n",nota_cinco);
    printf("%d nota(s) de R$ 2,00\n",nota_dois);
    printf("%d nota(s) de R$ 1,00\n",nota_um);



}