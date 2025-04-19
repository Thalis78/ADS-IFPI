//
// Created by thali on 10/24/2024.
//

#include <iostream>
#include <iomanip>
using namespace std;


int main() {
    double n = 3.14159;
    double raio,area;
    cout << "";
    cin >> raio;

    area = n * (raio * raio);

    cout << fixed << setprecision(4);
    cout << "A=" << area << endl;
}