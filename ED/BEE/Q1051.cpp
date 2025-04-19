#include <iostream>
using namespace std;

int main() {
    double salario,imposto = 0.0;

    cin >> salario;

    if(salario <= 2000) {
        cout << "Isento" << endl;
    }else if(salario <= 3000) {
        imposto = (salario - 2000.0) * 0.08;
        printf("R$ %.2lf\n", imposto);
    } else if (salario <= 4500.0) {
        imposto = (1000.0 * 0.08) + ((salario - 3000.0) * 0.18);
        printf("R$ %.2lf\n", imposto);
    } else {
        imposto = (1000.0 * 0.08) + (1500.0 * 0.18) + ((salario - 4500.0) * 0.28);
        printf("R$ %.2lf\n", imposto);
    }

    return 0;
}