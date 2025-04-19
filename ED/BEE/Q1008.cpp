#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;

int main () {
    int number;
    double dolar,valor_dolar;

    cin >> number;
    cin >> dolar;
    cin >> valor_dolar;

    printf("NUMBER = %d\n",number);
    printf("SALARY = U$ %.2f\n",dolar * valor_dolar);
}