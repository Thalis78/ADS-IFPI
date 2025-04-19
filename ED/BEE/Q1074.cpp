#include <iostream>
#include <sstream>
#include <vector>

using namespace std;

int main() {
    int n,x;

    cin >> n;

    for(int i = 1; i <= n; i++) {
        cin >> x;
        if(x < 0) {
            printf(x % 2 != 0 ? "ODD NEGATIVE\n" : "EVEN NEGATIVE\n");
        }else if(x > 0) {
            printf(x % 2 != 0 ? "ODD POSITIVE\n" : "EVEN POSITIVE\n");
        }else {
            printf("NULL\n");
        }
    }

    return 0;
}
