## EXERCÍCIO 02

1. PRIMEIRA QUESTÃO:

- Tipagem dinâmica: O tipo das variáveis é definido em tempo de execução e pode mudar. Ex.: Python, JavaScript.
- Tipagem estática: O tipo é definido em tempo de compilação e não pode ser alterado. Ex.: C, Java.

2. SEGUNDA QUESTÃO:
   Erros relacionados a tipos só são detectados em tempo de execução, o que pode causar problemas no funcionamento do programa.

3. TERCEIRA QUESTÃO:
   ex:

```
function soma(a, b) {
    return a + b;
}
console.log(soma(5, "10")); // Resultado: "510" (concatenação de string).
```

4. QUARTA QUESTÃO:

Apesar de definir tipos na compilação, C permite conversões implícitas entre tipos, o que pode causar perda de precisão ou comportamento inesperado

ex:

```
int x = 10.5; // O valor 10.5 é truncado para 10 sem aviso.
printf("%d", x); // Saída: 10
```

5. QUINTA QUESTÃO:

Não. Isso é uma característica comum de linguagens fortemente tipadas com um único tipo numérico. A fraqueza seria caracterizada pela facilidade de conversões implícitas entre tipos, o que TypeScript evita.

6. SEXTA QUESTÃO:

```
const nome = "Ely";
const tempoPagamento = 120.56;
const linguagemPreferida = "TypeScript";

const mensagem = `
    ${nome}
    My payment time is ${tempoPagamento}
    and
    my preferred language is ${linguagemPreferida}
`;
console.log(mensagem);
```
