#include <iostream>
using namespace std;

int main() {
    int x,y,menor,maior;

    menor = min(x,y);
    maior = max(x,y);

    cin >> x >> y;
    for(menor; menor < maior; menor++){
        if(menor%5 == 2 || menor%5 == 3){
            printf("%d\n",menor);
        }
    }
}
