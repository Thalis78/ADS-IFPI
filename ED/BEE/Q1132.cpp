#include <iostream>
#include <algorithm> 
using namespace std;

int main() {
    int x, y, soma = 0, menor, maior;

    cin >> x >> y;
    menor = min(x, y);
    maior = max(x, y);
    for (int i = menor; i <= maior; i++) {
        if (i % 13 != 0) {
            soma += i;
        }
    }
    cout << soma << endl;
    return 0;
}