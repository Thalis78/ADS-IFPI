#include <iostream>
using namespace std;

int main() {
    int escolhaDDD;
    int arrayDDD[8] = {61,71,11,21,32,19,27,31};
    string destino[8] = {"Brasilia","Salvador","Sao Paulo","Rio de Janeiro", "Juiz de Fora","Campinas","Vitoria","Belo Horizonte"};

    cin >> escolhaDDD;

    for(int i = 0; i < 8;i++) {
        if(arrayDDD[i] == escolhaDDD) {
            cout << destino[i] << endl;
            break;
        }else if(i == 8 - 1) {
            cout << "DDD nao cadastrado" << endl;
        }
    }

    return 0;
}