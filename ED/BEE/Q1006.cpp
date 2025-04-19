#include <stdio.h>
#include <iostream>
#include <string>

using namespace std;

int main () {
    double n1,n2,n3;
    cin >> n1;
    cin >> n2;
    cin >> n3;

    n1*=2;n2*=3;n3*=5;

    printf("MEDIA = %.1f\n",(n1+n2+n3)/10);

}