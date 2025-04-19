#include <iostream>
#include <sstream>
#include <vector>

using namespace std;

int main() {
    int n;;

    cin >> n;

    for(int i = 1; i <= n; i++) {
        if(i%2 == 0) {
            printf("%d^2 = %d\n",i,i * i);
        }
    }

    return 0;
}
