#include <iostream>

using namespace std;

int main() {
    int X[20];
    int X2[20];

    for (int i = 0; i < 20; i++) {
        cin >> X[i];
    }

    for (int i = 19, indici = 0; i >= 0; i--, indici++) {
        X2[indici] = X[i];
    }

    for (int i = 0; i < 20; i++) {
        cout << "N[" << i << "] = " << X2[i] << endl;
    }

    return 0;
}