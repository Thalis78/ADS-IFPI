#include <iostream>

using namespace std;

int main() {
    int Vezes, Num;
    
    cin >> Vezes;  
    
    for (int i = 0; i < Vezes; i++) {
        cin >> Num;
        if (Num % 2 != 0) {
            cout << 1 << endl;
        } else {
            cout << 0 << endl; 
        }
    }
    
    return 0;
}
