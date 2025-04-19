#include <iostream>
using namespace std;

int main() {
    int mesEscolhido;
    int mesNumber[12] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12};
    string mes[12] = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};

    cin >> mesEscolhido;

    for (int i = 0; i < 12; i++) {
        if (mesNumber[i] == mesEscolhido) {
            cout << mes[i] << endl;
            break;
        }
    }
    return 0;
}