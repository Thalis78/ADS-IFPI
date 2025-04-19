#include <iostream>
#include <string>

using namespace std;

int main() {
    int T;
    cin >> T;

    for (int t = 1; t <= T; t++) {
        string sheldon, raj;
        cin >> sheldon >> raj;

        string result = "";

        if (sheldon == raj) {
            result = "De novo!";
        } else if (sheldon == "pedra") {
            if (raj == "tesoura" || raj == "lagarto") {
                result = "Bazinga!";
            } else {
                result = "Raj trapaceou!";
            }
        } else if (sheldon == "papel") {
            if (raj == "pedra" || raj == "Spock") {
                result = "Bazinga!";
            } else {
                result = "Raj trapaceou!";
            }
        } else if (sheldon == "tesoura") {
            if (raj == "papel" || raj == "lagarto") {
                result = "Bazinga!";
            } else {
                result = "Raj trapaceou!";
            }
        } else if (sheldon == "lagarto") {
            if (raj == "papel" || raj == "Spock") {
                result = "Bazinga!";
            } else {
                result = "Raj trapaceou!";
            }
        } else if (sheldon == "Spock") {
            if (raj == "pedra" || raj == "tesoura") {
                result = "Bazinga!";
            } else {
                result = "Raj trapaceou!";
            }
        }

        cout << "Caso #" << t << ": " << result << endl;
    }

    return 0;
}
