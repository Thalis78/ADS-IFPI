#include <iostream>
using namespace std;

int main() {
    int t1,t2,t3,andar1,andar2,andar3;

    cin >> t1 >> t2 >> t3;

    andar1 = 0 + 2 * t2 + 4 * t3;
    andar2 = 2 * t1 + 0 + 2 * t3;
    andar3 = 4 * t1 + 2 * t2 + 0;

    int menor = min(min(andar1,andar2),andar3);

    printf("%d\n",menor);
}
