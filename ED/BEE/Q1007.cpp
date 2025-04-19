#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;

int main () {
    int a,b,c,d;

    cin >> a;
    cin >> b;
    cin >> c;
    cin >> d;

    int diferenca = (a * b) - (c * d);

    printf("DIFERENCA = %d\n",diferenca);
}