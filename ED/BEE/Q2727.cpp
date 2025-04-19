#include <iostream>
#include <sstream>
#include <vector>

using namespace std;

int main() {
    int N;
    
    while (cin >> N) {
        cin.ignore(); 

        for (int i = 0; i < N; i++) {
            string linha;
            getline(cin, linha); 
            
            istringstream iss(linha);
            vector<string> codigo;
            string palavra;
            
            while (iss >> palavra) {
                codigo.push_back(palavra);
            }

            char letra = static_cast<char>(96 + (((codigo.size() - 1) * 3) + codigo[0].length()));
            cout << letra << endl;
        }
    }

    return 0;
}