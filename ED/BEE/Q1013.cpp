#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;

int main () {
    int num1,num2,num3;
    cin >> num1 >> num2 >> num3;

    int maior = max(num1,num2);
    int maior2 = max(maior,num3);
    printf("%d eh o maior\n",maior2);


}