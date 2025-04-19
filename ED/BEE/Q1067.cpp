#include <iostream>
using namespace std;

int main() {
    int x;

    cin >> x;

    for(int valores = 1; valores <= x; valores++) {
        if(valores % 2 != 0) {
            cout << valores << endl;
        }
    }

    return 0;
}
