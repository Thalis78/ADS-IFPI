
#include <iostream>

using namespace std;

int prod(int num01,int num02);

int main() {
    int num01,num02;
    cout << "" ;
    cin >> num01;
    cout << "" ;
    cin >> num02;

    cout << "PROD = " << prod(num01,num02) << endl;
    return 0;
}
int prod(int num01, int num02) {
    return  num01 * num02;
}
