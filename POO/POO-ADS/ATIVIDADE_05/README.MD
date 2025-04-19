## Questões de Programação Orientada a Objetos

1.  (F) Objetos são modelos para classes;
    (F) Atributos de uma classe devem ser obrigatoriamente inicializados para que as classes compilem;
    (V) Uma variável declarada dentro de um método deve ser inicializada para que a classe seja compilável;
    (F) Uma variável que seja uma classe declarada em um método é automaticamente inicializada com undefined;
    (V) Construtores são rotinas especiais que servem para inicializar e configurar os objetos no momento da instanciação;
    (V) Construtores não possuem tipo de retorno e podem ou não ter parâmetros;
    (V) Uma classe pode ter várias instâncias.

2.  Sim, haverá um problema de compilação, pois a variável quantReservas não foi inicializada, e isso é obrigatório para que o programa funcione corretamente.

3.  Uso do construtor

```
public Hotel(int quantReservas) {
    this.quantReservas = quantReservas;
}
```

4.  O erro ocorre porque o método que tenta acessar um atributo não foi declarado corretamente ou o atributo não foi inicializado. Para resolver é necessário certificar de que o atributo foi inicializado no construtor ou fornecer um valor padrão no momento da declaração.

5.

- a. O primeiro console.log exibirá o saldo da conta c1, e o segundo mostrará o saldo da conta c2, pois ambos compartilham a mesma referência.O primeiro console.log exibirá o saldo da conta c1, e o segundo mostrará o saldo da conta c2, pois ambos compartilham a mesma referência.
- b. Após as atribuições, o objeto original referenciado por c1 será inacessível se não houver outras referências a ele, sendo elegível para coleta de lixo.

6.

```
public class Saudacao {
    private String texto;
    private String destinatario;

    public Saudacao(String texto, String destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }

    public String obterSaudacao() {
        return texto + ", " + destinatario + "!";
    }
}
```

7.

```
public class Triangulo {
    private double lado1, lado2, lado3;

    public Triangulo(double lado1, double lado2, double lado3) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    public boolean isEquilatero() {
        return lado1 == lado2 && lado2 == lado3;
    }

    public boolean isIsosceles() {
        return lado1 == lado2 || lado2 == lado3 || lado1 == lado3;
    }

    public boolean isEscaleno() {
        return lado1 != lado2 && lado2 != lado3 && lado1 != lado3;
    }
}

```

8.

```
public class Equipamento {
    private boolean ligado;

    public void ligar() {
        if (!ligado) {
            ligado = true;
        }
    }

    public void desligar() {
        if (ligado) {
            ligado = false;
        }
    }

    public boolean isLigado() {
        return ligado;
    }
}

```

9.

```
public boolean sacar(double valor) {
    if (valor > 0 && valor <= saldo) {
        saldo -= valor;
        return true;
    }
    return false;
}

public boolean transferir(double valor, Conta destino) {
    if (sacar(valor)) {
        destino.depositar(valor);
        return true;
    }
    return false;
}

```

10.

```
public class Jogador {
    private String nome;
    private int vida;

    public Jogador(String nome, int vida) {
        this.nome = nome;
        this.vida = vida;
    }

    public boolean estaVivo() {
        return vida > 0;
    }

    public int calcularAtaque() {
        return (int) (Math.random() * 10) + 1;

    }

    public void atacar(Jogador oponente) {
        int dano = calcularAtaque();
        oponente.vida -= dano;
    }
}

```

10. A abordagem da questão 9 é mais adequada em sistemas financeiros, pois considera valores lógicos para validação. Já a questão 10 é melhor em jogos devido ao dinamismo e lógica de combate.
