#include <iostream>
using namespace std;

int main() {
    int b1, b2, b3, b4, b5, b6, b7, b8, b9;
    string renas[9] = {"Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen", "Rudolph"};

    cin >> b1 >> b2 >> b3 >> b4 >> b5 >> b6 >> b7 >> b8 >> b9;

    int totalBolasNeves = (b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9);

    int indexVencedora = (totalBolasNeves - 1) % 9;

    cout << renas[indexVencedora] << endl;

    return 0;
}
