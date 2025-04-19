#include <stdio.h>
#include <iostream>
using namespace std;

int main() {
    int i = 1, j = 60;
    while (true){
        printf("I=%d J=%d\n",i,j);
        if(j == 0){
            break;
        }
        i+=3;
        j-=5;
    }
}