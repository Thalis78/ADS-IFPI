#include <iostream>
using namespace std;



int main() {
    int x,y,count = 1;

    cin >> x >> y;

    for(int i = 1; i <= y;i++){
        printf("%d",i);

        if(count == x){
            printf("\n");
            count = 0;
        } else {
            printf(" "); 
        }
        count++;
    }

}