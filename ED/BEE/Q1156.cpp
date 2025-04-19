#include <iostream>
#include <iomanip>

using namespace std;

int main() {
    double S = 0;
    int numerador = 1;
    int denominador = 1;

    for (int i = 0; i < 20; i++) {
        S += static_cast<double>(numerador) / denominador;
        numerador += 2;
        denominador *= 2;
    }

    cout << fixed << setprecision(2) << S << endl;

    return 0;
}
