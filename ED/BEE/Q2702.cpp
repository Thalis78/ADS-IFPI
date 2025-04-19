#include <iostream>
using namespace std;

int main() {
    int frango,bife,massa,quant_frango,quant_bife,quant_massa,deficiencia;

    cin >> frango  >> bife >> massa >> quant_frango >> quant_bife >> quant_massa;

    deficiencia += max(frango,quant_frango) == quant_frango ? quant_frango - frango : 0;
    deficiencia += max(bife,quant_bife) == quant_bife ? quant_bife - bife : 0;
    deficiencia += max(massa,quant_massa) == quant_massa ? quant_massa - massa : 0;


    printf("%d\n",deficiencia);

}