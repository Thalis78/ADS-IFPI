#include <iostream>
using namespace std;

int main() {
    int positivos = 0;
    double num;

    for(int valores = 0; valores < 6; valores++) {
        cin >> num;
        if(num > 0) {
            positivos++;
        }
    }

    cout << positivos << " valores positivos" << endl;

    return 0;
}
