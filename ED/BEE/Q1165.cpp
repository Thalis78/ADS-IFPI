#include <iostream>
#include <cstdio>

using namespace std;

int main() {
    int N;
    cin >> N;

    for (int count = 0; count < N; count++) {
        int X;
        cin >> X;

        if (X <= 1) {
            printf("%d nao eh primo\n", X);
            continue;
        }

        bool isPrime = true;
        for (int i = 2; i * i <= X; i++) {
            if (X % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            printf("%d eh primo\n", X);
        } else {
            printf("%d nao eh primo\n", X);
        }
    }

    return 0;
}