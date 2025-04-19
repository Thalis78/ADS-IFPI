#include <iostream>
using namespace std;

int main() {
    int n,a,b;

    cin >> n;
    cin >> a >> b;

    if((a + b) > n) {
        printf("Deixa para amanha!\n");
    }else {
        printf("Farei hoje!\n");
    }
}
