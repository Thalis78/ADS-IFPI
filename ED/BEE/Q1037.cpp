#include <iostream>
using namespace std;

int main() {
    double num_flutuante;

    cin >> num_flutuante;

    if(num_flutuante < 0 || num_flutuante > 100) {
        cout << "Fora de intervalo" << endl;
    }else if(num_flutuante <= 25) {
        cout << "Intervalo [0,25]" << endl;
    }else if(num_flutuante <= 50) {
        cout << "Intervalo (25,50]" << endl;
    }else if(num_flutuante <=- 75) {
        cout << "Intervalo (50,75]" << endl;
    }else {
        cout << "Intervalo (75,100]" << endl;
    }
}
