#include <iostream>
using namespace std;

int main() {
    int positivos = 0;
    double num,media;

    for(int valores = 0; valores < 6; valores++) {
        cin >> num;
        if(num > 0) {
            media += num;
            positivos++;
        }
    }

    cout << positivos << " valores positivos" << endl;
    printf("%.1f\n",media/positivos);
    return 0;
}