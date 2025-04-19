#include "revisao.h"
#include <iostream>
#include <sstream>
using namespace std;

struct Arv{
    int num;
    Arv *esq;
    Arv *dir;

};

bool isNull(Arv* &arv) {
  return arv == NULL;
}
bool notNull(Arv* &arv) {
    return arv != NULL;
}

void criarArv(int num, Arv* &arv, Arv* esq = NULL, Arv* dir = NULL) {
    Arv* novo = (Arv*) malloc(sizeof(Arv));
    novo->num = num;
    novo->esq = esq;
    novo->dir = dir;
    arv = novo;
}

void preOrdem(Arv* arv) {
    if (arv == NULL) return;
    printf("%d ", arv->num);
    preOrdem(arv->esq);
    preOrdem(arv->dir);
}

void emOrdem(Arv* &arv) {
    if (isNull(arv)) return;
    emOrdem(arv->esq);
    printf("%d ", arv->num);
    emOrdem(arv->dir);
}

int buscarBin(int num, Arv* &arv) {
    if (arv == NULL) return 0;

    return arv->num == num ? 1 : num < arv->num ? buscarBin(num, arv->esq) : buscarBin(num, arv->dir);
}

void posOrdem(Arv* &arv) {
    if (isNull(arv)) return;
    posOrdem(arv->esq);
    posOrdem(arv->dir);
    printf("%d ", arv->num);
}

void inserirABB(int num, Arv* &arv) {
    if (isNull(arv)) {
        criarArv(num, arv);
        return;
    }

    return arv->num > num ? inserirABB(num, arv->esq) : inserirABB(num, arv->dir);
}

int totalNo(Arv* arv) {
    return isNull(arv) ? 0 : 1 + totalNo(arv->esq) + totalNo(arv->dir);
}

int folhas(Arv* arv) {
    if (isNull(arv)) return 0;

    return isNull(arv->esq) && isNull(arv->dir) ? 1 : folhas(arv->esq) + folhas(arv->dir);
}

int noInterno(Arv* arv) {
    if (isNull(arv)) return 0;

    return  notNull(arv->esq) || notNull(arv->dir) ?  1 + noInterno(arv->esq) + noInterno(arv->dir) : 0;
}

int altura(Arv* arv) {
    if (isNull(arv)) return 0;

    return 1 + max(altura(arv->esq), altura(arv->dir));
}

bool estritamenteBin(Arv* &arv) {
    return (notNull(arv->esq) && notNull(arv->dir)) || 
           (isNull(arv->esq) && isNull(arv->dir));
}

int main() {
    Arv* raiz = NULL;

    inserirABB(5, raiz);
    inserirABB(5, raiz);
    inserirABB(4, raiz);
    inserirABB(6,raiz);
    inserirABB(6,raiz);
    inserirABB(3,raiz);
    inserirABB(4,raiz);
    inserirABB(2,raiz);
    inserirABB(3,raiz);
    inserirABB(7, raiz);

    int resultBin = buscarBin(7, raiz);

    if (resultBin) {
        printf("NUMERO ENCONTRADO\n");
    }else {
        printf("NUMERO NÃO ENCONTRADO\n");
    }
}
