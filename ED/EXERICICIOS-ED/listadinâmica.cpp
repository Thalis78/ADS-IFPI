
#include "revisao.h"
#include <iostream>
#include <sstream>

struct No{
    int num;
    No* prox;
};

bool isNull(No* &no) {
  return no == NULL;
}

void criarLista(int num, No* &no) {
  No* noaux = (struct No*) malloc(sizeof(struct No));
  noaux->num = num;
  noaux->prox = NULL;
  no = noaux;
}

void inserirInicio(int num, No* &no){
  if (isNull(no)) {
    criarLista(num,no);
    return;
  }
  No* noaux = (struct No*) malloc(sizeof(struct No));
  noaux->num = num;
  noaux->prox = no;
  no = noaux;
}

void inserirFinal(int num, No* &no) {
  if (isNull(no)) {
    criarLista(num,no);
    return;
  }
  if (isNull(no->prox)) {
    No* noaux = NULL;
    criarLista(num,noaux);
    no->prox = noaux;
  }else {
    inserirFinal(num,no->prox);

  }
}

void listar(No* no) {
    if (no == NULL) {
      printf("Lista vazia\n");
      return;
    }
    printf("Valor : %d\n", no->num);
    listar(no->prox);
}

void excluirInicio(No* &no) {
    if (isNull(no)) {
      printf("Lista vazia\n");
      return;
    }
    No * aux = no;
    no = aux->prox;
    free(aux);
}

void excluirFinal(No* &no) {
  if (isNull(no)) {
    printf("Lista vazia\n");
    return;
  }

  if (isNull(no->prox)) {
    printf("Removendo único elemento: %d\n", no->num);
    free(no);
    no = NULL;
    return;
  }

  if (isNull(no->prox->prox)) {
    printf("Removendo último elemento: %d\n", no->prox->num);
    free(no->prox);
    no->prox = NULL;
    return;
  }

  excluirFinal(no->prox);
}

int main(){
  No* no = NULL;

  inserirFinal(1, no);
  inserirFinal(2, no);
  inserirFinal(3, no);
  excluirFinal(no);
  listar(no);
}