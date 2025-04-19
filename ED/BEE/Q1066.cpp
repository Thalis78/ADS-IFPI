#include <iostream>
using namespace std;

int main() {
    int positivos = 0,negativos = 0,pares = 0, impares = 0;
    int num;

    for(int valores = 0; valores < 5; valores++) {
        cin >> num;
        if(num > 0) {
            positivos++;
        }else if(num < 0) {
            negativos++;
        }

        if(num%2 == 0) {
            pares++;
        }else {
            impares++;
        }
    }
    printf("%d valor(es) par(es)\n",pares);
    printf("%d valor(es) impar(es)\n",impares);
    printf("%d valor(es) positivo(s)\n",positivos);
    printf("%d valor(es) negativo(s)\n",negativos);
    return 0;
}
