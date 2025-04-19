#include "revisao.h"
#include <iostream>
#include <sstream>


struct Pilha {
    int valor;
    Pilha *prox;
};

void pecorrerPilha(Pilha *p){
    if (p == NULL) {
        printf("Pilha vazia\n");
        return;
    }
    printf("NUMERO DA PILHA: %d\n",p->valor);
    pecorrerPilha(p->prox);

}

void criarPilha(int num, Pilha* &pilha) {
    Pilha* newPilha = (struct Pilha*) malloc(sizeof(Pilha));
    newPilha->valor = num;
    newPilha->prox = NULL;
    pilha = newPilha;
}

void empilhar(int num, Pilha* &pilha) {
    if (pilha == NULL) {
        criarPilha(num, pilha);
        return;
    }

    Pilha* newPilha = (struct Pilha*) malloc(sizeof(Pilha));
    newPilha->valor = num;
    newPilha->prox = pilha;
    pilha = newPilha;
}

void topo(Pilha* &pilha) {
    if (pilha == NULL) {
        printf("Vazio!");
        return;
    }
    printf("TOPO DA PILHA: %d\n", pilha->valor);
}



void desimpilhar(Pilha* &pilha) {
    if (pilha == NULL) {
        printf("É vázio!");
        return;
    }
    Pilha* aux = pilha;
    pilha = aux->prox;
    topo(pilha);
    free(aux);
}

void limpar(Pilha* &pilha) {
    if (pilha == NULL) {
        printf("Vazio!");
        return;
    }
    Pilha* aux = pilha;
    pilha = aux->prox;
    free(aux);
    limpar(pilha);
}

void inverterPilha(Pilha* &pilha) {
    Pilha* aux = NULL;
    while (pilha != NULL) {
        empilhar(pilha->valor, aux);
        desimpilhar(pilha);
    }
    pilha = aux;
}


int main(){

    Pilha* pilha = NULL;

    empilhar(10, pilha);
    empilhar(20, pilha);
    empilhar(30, pilha);
    pecorrerPilha(pilha);

    inverterPilha(pilha);
    pecorrerPilha(pilha);

}