package QUESTAO_03;

public class Main {
    public static void main(String[] args) {
        CalculadoraCientifica calculadoraCientifica = new CalculadoraCientifica(3,5);

        int exponenciar = calculadoraCientifica.exponenciar(calculadoraCientifica.getNum1(), calculadoraCientifica.getNum2());

        System.out.printf("RESULTADO : %d",exponenciar);
    }
}
