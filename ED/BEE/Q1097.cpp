#include <stdio.h>
#include <iostream>
using namespace std;

int main() {
    int i = 1, j = 7;
    while (true){
        for(int k = 0; k < 3;k++){
            printf("I=%d J=%d\n",i,j - k);
        }
        if(i == 9){
            break;
        }
        i+=2;
        j+=2;
    }
}