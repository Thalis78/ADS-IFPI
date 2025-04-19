#include <iostream>
using namespace std;

int main() {
    string tipoAnimal1, tipo2, tipo3;

    cin >> tipoAnimal1 >> tipo2 >> tipo3;

    if (tipoAnimal1 == "vertebrado") {
        if (tipo2 == "ave") {
            if (tipo3 == "carnivoro") {
                cout << "aguia" << endl;
            } else { 
                cout << "pomba" << endl;
            }
        } else { 
            if (tipo3 == "onivoro") {
                cout << "homem" << endl;
            } else {
                cout << "vaca" << endl;
            }
        }
    } else {
        if (tipo2 == "inseto") {
            if (tipo3 == "hematofago") {
                cout << "pulga" << endl;
            } else { 
                cout << "lagarta" << endl;
            }
        } else {
            if (tipo3 == "hematofago") {
                cout << "sanguessuga" << endl;
            } else {
                cout << "minhoca" << endl;
            }
        }
    }

    return 0;
}
