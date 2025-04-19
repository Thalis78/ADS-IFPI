#include <iostream>

int main() {
    int x = {5};
    int y = {0};
    int num = {0};
    for(int i = 0;i < x;i++) {
        std::cout << "";
        std::cin >> num;
        if(num%2 == 0) {
            y++;
        }
    }
    std:: cout << y << " valores pares" << std::endl;
    return 0;
}