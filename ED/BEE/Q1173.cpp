#include <iostream>
#include <cstdio>
using namespace std;

int main() {
    int v;
    int x[10];

    cin >> v;

    x[0] = v;

    for(int i = 1; i < 10;i++){
        x[i] = x[i-1] * 2;
    }
    for(int i = 0; i < 10;i++){
        printf("N[%d] = %d\n", i,x[i]);
    }

}
