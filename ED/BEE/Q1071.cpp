#include <iostream>

using namespace std;

int main() {
    int X, Y;
    cin >> X >> Y;
    Y++;  

    int sum = 0;

    if (X > Y) {
        int temp = X;
        X = Y;
        Y = temp;
    }

    for (int i = X; i < Y; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }

    cout << sum << endl; 
    return 0;
}
