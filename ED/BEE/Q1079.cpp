#include <iostream>
#include <sstream>
#include <vector>

using namespace std;

int main() {
    int n;

    cin >> n;

    double n1,n2,n3;
    for(int i = 0; i < n;i++) {
        cin >> n1 >> n2 >> n3;
        printf("%.1f\n",(n1*2 + n2 * 3 + n3 * 5)/10);
    }
    return 0;
}
