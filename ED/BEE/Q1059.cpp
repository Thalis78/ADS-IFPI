#include <iostream>
using namespace std;

int main() {
    for(int pares = 1; pares <= 100; pares++) {
        if(pares%2 == 0) {
            cout << pares << endl;
        }
    }
    return 0;
}
