#include <iostream>
#include <sstream>
#include <vector>

using namespace std;

int main() {
    int n,nMaior = 0,posicao;
    for(int i = 1; i <= 100;i++) {
        cin >> n;

        if(n > nMaior) {
            nMaior = n;
            posicao = i;
        }
    }
    printf("%d\n",nMaior);
    printf("%d\n",posicao);
    return 0;
}