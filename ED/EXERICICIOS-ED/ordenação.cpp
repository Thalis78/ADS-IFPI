#include <iostream>
#include <sstream>
using namespace std;

struct No{
 int num;
 No* prox;
};

void listar(No* no) {
 if (no == NULL) {
  printf("Lista vazia\n");
  return;
 }
 printf("Valor : %d\n", no->num);
 listar(no->prox);
}


bool isNull(No* &no) {
 return no == NULL;
}

void criarLista(int num, No* &no) {
 No* noaux = (struct No*) malloc(sizeof(struct No));
 noaux->num = num;
 noaux->prox = NULL;
 no = noaux;
}

void inserir(int num, No* &no){
 if (isNull(no)) {
  criarLista(num,no);
  return;
 }
 No* noaux = (struct No*) malloc(sizeof(struct No));
 noaux->num = num;
 noaux->prox = no;
 no = noaux;
}
// COMPLEXIDADE O(N²) - DOIS LOOPS
void bubbleSortRecursivo(No* &inicio) {
 if (inicio == NULL || inicio->prox == NULL) return;

 bool houveTroca = false;
 No* atual = inicio;

 while (!isNull(atual->prox)) {
  if (atual->num > atual->prox->num) {
   int temp = atual->num;
   atual->num = atual->prox->num;
   atual->prox->num = temp;
   houveTroca = true;
  }
  atual = atual->prox;
 }

 if (houveTroca) {
  bubbleSortRecursivo(inicio);
 }
}

// COMPLEXIDADE O(N²) - DOIS LOOPS
void selectionSortRecursivo(No* &inicio) {
 if (inicio == NULL || inicio->prox == NULL) return;

 No* menor = inicio;
 No* atual = inicio->prox;

 while (atual != NULL) {
  if (atual->num < menor->num) {
   menor = atual;
  }
  atual = atual->prox;
 }

 if (menor != inicio) {
  int temp = inicio->num;
  inicio->num = menor->num;
  menor->num = temp;
 }

 selectionSortRecursivo(inicio->prox);
}


int main(){
 No* no = NULL;
 inserir(3, no);
 inserir(4,no);
 inserir(1, no);
 selectionSortRecursivo(no);
 listar(no);
}