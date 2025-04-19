#include <iostream>
#include <sstream>
#include <vector>

using namespace std;

int main() {
    int x,numero,in = 0,out = 0;

    cin >> x;

    for(int i = 0; i < x; i++) {
        cin >> numero;
        if(numero <= 20 && numero >= 10) {
            in++;
        }else {
            out++;
        }
    }

    printf("%d in\n",in);
    printf("%d out\n",out);
    
    return 0;
}
