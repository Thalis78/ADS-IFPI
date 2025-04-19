#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;

int main () {
    double n1,n2;
    cin >> n1;
    cin >> n2;

    n1*=3.5,n2*=7.5;

    printf("MEDIA = %.5f\n",(n1+n2)/11);

}