## EXERCICIO 03

#### RESOLUÇÃO FEITA EM TS

1.

```
function isPar(numero: number): boolean {
    return numero % 2 === 0;
}

console.log(isPar(4));
console.log(isPar(5));
```

2.

```
function saudacao(nome: string, pronome: string = "Sr"): void {
    console.log(`${pronome}. ${nome}`);
}

saudacao("João");
saudacao("Sávia", "Sra");
```

3.

```
function separarArray(array: number[]): string {
    let resultado = "";
    array.forEach((num, index) => {
        resultado += num + (index < array.length - 1 ? "-" : "");
    });
    return resultado;
}

console.log(separarArray([1, 2, 3, 4])); // "1-2-3-4"
```

4.

```
function soma(x: number, y?: any): number {
    return x + y;
    }

console.log(soma(1, 2));
console.log(soma(1, "2"));
console.log(soma(1));
```

5.

```
function exibir(...parametros: string[]): void {
    parametros.forEach((param) => console.log(param));
}

exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");
```

6.

```
const ola = (): void => {
    console.log("Olá");
};

ola();
```

7.

```
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const pares = array.filter((num) => num % 2 === 0);

console.log(pares);
```

8.
