#include <iostream>
#include <cstdio>  
using namespace std;

int main() {
    int idade = 0, idades = 0, count = 0;
    double mediaIdades;

    while (true) {
        cin >> idade;
        if (idade >= 0) {
            idades += idade;
            count++;
        } else {
            break;
        }
    }
    mediaIdades = static_cast<double>(idades) / count;
    printf("%.2f\n", mediaIdades);

    return 0;
}
