#include <iostream>
using namespace std;

int main() {
    int num1, num2, num3;
    int menor, meio, maior;

    cin >> num1 >> num2 >> num3;

    menor = (num1 <= num2 && num1 <= num3) ? num1 : (num2 <= num1 && num2 <= num3) ? num2 : num3;
    maior = (num1 >= num2 && num1 >= num3) ? num1 : (num2 >= num1 && num2 >= num3) ? num2 : num3;
    meio = (num1 != menor && num1 != maior) ? num1 : (num2 != menor && num2 != maior) ? num2 : num3;

    cout << menor << endl;
    cout << meio << endl;
    cout << maior << endl;
    cout << endl;

    cout << num1 << endl;
    cout << num2 << endl;
    cout << num3 << endl;

    return 0;
}
