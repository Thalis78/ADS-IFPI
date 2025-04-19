package QUESTAO_02;

public class Calculadora {
    private int num1, num2;

    public Calculadora(int num1, int num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    public int soma() {
        return this.num1 + this.num2;
    }
}
