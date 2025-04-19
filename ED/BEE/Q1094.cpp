#include <stdio.h>
#include <iostream>
using namespace std;

int main() {
    int n,quant = 0,quantTotal = 0,coelhos = 0,ratos = 0,sapos = 0;
    string tipoAnimal;
    string tipo[3] = {"C","R","S"};

    cin >> n;

    for(int i = 0; i < n;i++){
        cin >>  quant >> tipoAnimal;
        if(tipoAnimal == tipo[0]){
            coelhos+=quant;
        }else if(tipoAnimal == tipo[1]){
            ratos+=quant;
        }else{
            sapos+=quant;
        }
        quantTotal+=quant;
    }
    double percentualCoelho = (static_cast<double>(coelhos) / quantTotal) * 100;
    double percentualRatos = (static_cast<double>(ratos) / quantTotal) * 100;
    double percentualSapos = (static_cast<double>(sapos) / quantTotal) * 100;

    printf("Total: %d cobaias\n",quantTotal);
    printf("Total de coelhos: %d\n",coelhos);
    printf("Total de ratos: %d\n",ratos);
    printf("Total de sapos: %d\n",sapos);
    printf("Percentual de coelhos: %.2f %s\n",percentualCoelho,"%");
    printf("Percentual de ratos: %.2f %s\n",percentualRatos,"%");
    printf("Percentual de sapos: %.2f %s\n", percentualSapos,"%");

    return 0;
}