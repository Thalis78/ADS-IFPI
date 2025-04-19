#include "revisao.h"
#include <iostream>
#include <sstream>

struct Fila {
   int num;
   struct Fila* prox;
};

void criarFila(int num, Fila* &fila) {
    Fila* novo = (struct Fila*)malloc(sizeof(struct Fila));
    novo->num = num;
    novo->prox = NULL;
    fila = novo;
}

void enfileirar(int num, Fila* &fila) {
    if(fila == NULL) {
        criarFila(num, fila);
        return;
    }

    if(fila->prox == NULL) {
        Fila* novo = (struct Fila*)malloc(sizeof(struct Fila));
        novo->num = num;
        novo->prox = NULL;
        fila->prox = novo;
        return;
    }

    enfileirar(num, fila->prox);
}

void desenfileirar(Fila* &fila) {
    if(fila == NULL) {
        printf("Fila vazia\n");
        return;
    }

    Fila* aux = fila;
    fila = fila->prox;
    free(aux);
}
void listar(Fila* fila) {
    if(fila == NULL) {
        printf("Fila vazia\n");
        return;
    }

    printf("Fila: %d\n",fila->num);
    listar(fila->prox);
}

int main() {
    Fila* fila = NULL;
    enfileirar(1, fila);
    enfileirar(2, fila);
    enfileirar(3, fila);

    listar(fila);

    desenfileirar(fila);
    desenfileirar(fila);

    listar(fila);

}