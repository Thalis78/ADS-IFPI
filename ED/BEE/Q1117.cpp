#include <iostream>
#include <iomanip>

int main() {
    double nota01, nota02;

    do {
        std::cin >> nota01;
        if (nota01 < 0 || nota01 > 10) {
            std::cout << "nota invalida" << std::endl;
        }
    } while (nota01 < 0 || nota01 > 10);

    do {
        std::cin >> nota02;
        if (nota02 < 0 || nota02 > 10) {
            std::cout << "nota invalida" << std::endl;
        }
    } while (nota02 < 0 || nota02 > 10);

    double media = (nota01 + nota02) / 2;
    std::cout << std::fixed << std::setprecision(2);
    std::cout << "media = " << media << std::endl;

    return 0;
}
