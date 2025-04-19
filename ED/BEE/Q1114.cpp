#include <stdio.h>
#include <iostream>
using namespace std;

int main() {
    int senhaFixa = 2002,senhaTentativa;

    while (true){

        cin >> senhaTentativa;

        if(senhaFixa == senhaTentativa){
            cout << "Acesso Permitido" << endl;
            break;
        }else{
            cout << "Senha Invalida" << endl;
        }
    }
}