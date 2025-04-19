#include <stdio.h>
#include <iostream>
using namespace std;

int main() {
    int m,n,minimo,maximo,soma;

    while (true){
        soma = 0;
        cin >> m >> n;
        if(m <= 0 || n <= 0){
            break;
        }
        minimo = min(m,n);
        maximo = max(m,n);

        for(int i = minimo;i <= maximo; i++){
            printf("%d ",i);
            soma+=i;
        }

        printf("Sum=%d\n",soma);
    }

}