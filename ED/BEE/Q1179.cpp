#include <iostream>
using namespace std;

void printArray(int arr[], const string& type, int size) {
    for (int i = 0; i < size; i++) {
        cout << type << "[" << i << "] = " << arr[i] << endl;
    }
}

int main() {
    int evenNumbers[5];
    int oddNumbers[5];
    int evenCount = 0;
    int oddCount = 0;

    for (int i = 0; i < 15; i++) {
        int value;
        cin >> value;

        if (value % 2 == 0) {
            evenNumbers[evenCount] = value;
            evenCount++;
            if (evenCount == 5) {
                printArray(evenNumbers, "par", evenCount);
                evenCount = 0;
            }
        } else {
            oddNumbers[oddCount] = value;
            oddCount++;
            if (oddCount == 5) {
                printArray(oddNumbers, "impar", oddCount);
                oddCount = 0;
            }
        }
    }

    printArray(oddNumbers, "impar", oddCount);
    printArray(evenNumbers, "par", evenCount);

    return 0;
}
