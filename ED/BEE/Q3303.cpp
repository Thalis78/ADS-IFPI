#include <iostream>
#include <string>
using namespace std;

int main() {
    string palavra;
    
    getline(cin, palavra); 
    
    if (palavra.length() >= 10) {
        cout << "palavrao" << endl;
    } else {
        cout << "palavrinha" << endl;
    }

    return 0;
}
