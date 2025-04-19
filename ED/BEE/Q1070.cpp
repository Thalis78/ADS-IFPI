#include <iostream>
using namespace std;

int main() {
    int x,count = 0;

    cin >> x;

    while (count < 6) {
        if(x%2 != 0) {
            cout << x << endl;
            count++;
        }
        x++;
    }

    return 0;
}
