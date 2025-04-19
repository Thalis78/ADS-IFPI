#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double n1, n2, n3, n4, media, nExame, mediaFinal;

    cin >> n1 >> n2 >> n3 >> n4;

    media = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10;

    cout << fixed << setprecision(1);
    cout << "Media: " << media << endl;

    if (media >= 7.0) {
        cout << "Aluno aprovado." << endl;
    } else if (media >= 5.0) {
        cout << "Aluno em exame." << endl;
        cin >> nExame;
        cout << "Nota do exame: " << nExame << endl;
        
        mediaFinal = (media + nExame) / 2;

        if (mediaFinal >= 5.0) {
            cout << "Aluno aprovado." << endl;
        } else {
            cout << "Aluno reprovado." << endl;
        }
        
        cout << "Media final: " << mediaFinal << endl;
    } else {
        cout << "Aluno reprovado." << endl;
    }

    return 0;
}
