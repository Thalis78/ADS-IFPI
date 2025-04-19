#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    double a, b, c;

    cin >> a >> b >> c;

    double lados[3] = {a, b, c};
    sort(lados, lados + 3, greater<double>());

    a = lados[0];
    b = lados[1];
    c = lados[2];

    if (a >= b + c) {
        cout << "NAO FORMA TRIANGULO" << endl;
    } else {
        if (a * a == b * b + c * c) {
            cout << "TRIANGULO RETANGULO" << endl;
        } else if (a * a > b * b + c * c) {
            cout << "TRIANGULO OBTUSANGULO" << endl;
        } else if (a * a < b * b + c * c) {
            cout << "TRIANGULO ACUTANGULO" << endl;
        }

        if (a == b && b == c) {
            cout << "TRIANGULO EQUILATERO" << endl;
        } else if (a == b || b == c || a == c) {
            cout << "TRIANGULO ISOSCELES" << endl;
        }
    }

    return 0;
}
