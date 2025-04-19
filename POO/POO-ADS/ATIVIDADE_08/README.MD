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

## 2. Explique por que cada um dos 3 métodos acima possui limitações de uso.

- Try-Catch;

Usar exceções pode tornar o programa mais lento, especialmente se ocorrem muitas exceções durante a execução. Além de uma mudanças inesperadas no fluxo do programa pode tornar o código difícil de entender e manter.

- Finally:

Acaba não ajudando tanto a capturar ou corrigir erros que acontecem no programa. Além de pode esconder a exceção original, dificultando o diagnóstico do problema.

- Condições:

Você precisa verificar manutalmente as condições, o que pode gerar muito codigo repetido e dificil de manter.Além de servir somente para os erros que foram previstos, se algo inesperado acontecer, ele não vai ajudar a tratar.

## 3. Com o código repassado, crie duas contas e teste o método transferir de modo que a conta a ser debitada não possua saldo suficiente. Explique o que ocorreu.

- O programa após verificar que o saldo era menor que o valor da transferência, retornou ao cliente que o saldo era insuficiente para realizar a operação. A transferência é abortada e os saldos das contas permanecem inalterados.

## 4. Instancie uma classe App e, caso necessário, crie duas contas. Acesse a opção de transferir com valor alto o suficiente para lançar uma exceção/erro. Verifique que o lançamento da exceção foi “propagado” para o método conta.transferir(), banco.transferir() e App.menu()? Como você avalia a confiabilidade dessa implementação.

- A implementação é confiável para um sistema simples de transferência, pois propaga as exceções corretamente e trata o erro com clareza. No entanto, em um sistema de produção, recomenda-se o uso de exceções mais específicas e uma estratégia mais robusta para lidar com erros críticos.

## 5. Crie um método chamado validaValor(valor) na que lance um erro caso o valor repassado seja menor ou igual a zero ou em formato inválido. Chame o método no construtor da classe conta para validar o saldo inicial. Chame o método também nos métodos sacar e depositar. Reexecute a classe App e chame as opções de menu que aceitam valores referentes a saldo, débito, crédito e transferir. Avalie o tratamento do erro.

- O código está bem estruturado, com validações claras para garantir que os valores fornecidos pelo usuário sejam válidos.

- Exceções são usadas corretamente para capturar erros e fornecer mensagens informativas ao usuário.
