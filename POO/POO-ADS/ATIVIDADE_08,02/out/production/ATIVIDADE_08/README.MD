# ATIVIDADE 08

## 1. Enumere os 3 tipos mais comuns de tratamento de erros e exemplifique com códigos seus ou pesquisados na internet.

- Try-Catch (Exceções):

Esse tipo de tratamento é usado para capturar erros (exceções) que ocorrem durante a execução do programa. Quando um erro é detectado, o controle é transferido para um bloco de código específico para tratar o erro.

```
public class ExemploTryCatch {
    public static void main(String[] args) {
        try {
            int resultado = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Erro: Divisão por zero.");
        }
    }
}
```

- Finally:

Esse tipo de tratamento é uma extensão do try-catch, permitindo que um bloco de código seja executado independentemente de um erro ocorrer ou não. O bloco finally é útil para liberar recursos, como arquivos ou conexões de banco de dados.

```
public class ExemploFinally {
    public static void main(String[] args) {
        try {
            System.out.println("Abrindo arquivo...");
            int resultado = 10 / 0;
        } catch (Exception e) {
            System.out.println("Erro ocorreu: " + e);
        } finally {
            System.out.println("Fechando recursos...");
        }
    }
}
```

- Condições:

Este método trata os erros verificando condições antes de executar uma operação que possa gerar um erro. Ao invés de capturar uma exceção, o programa simplesmente evita a situação que poderia causar o erro.

```
public class ExemploCondicoes {
    public static void main(String[] args) {
        int numerador = 10;
        int denominador = 0;

        if (denominador == 0) {
            System.out.println("Erro: Não é possível dividir por zero.");
        } else {
            int resultado = numerador / denominador;
            System.out.println("Resultado: " + resultado);
        }
    }
}

```
