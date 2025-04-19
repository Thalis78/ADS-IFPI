import java.util.Scanner;

public class Q1018 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int valorSaque = input.nextInt();
        System.out.println(saque(valorSaque));
        input.close();
    }

    public static String saque(int valorSaque) {
        int notas100 = valorSaque / 100;
        valorSaque %= 100;

        int notas50 = valorSaque / 50;
        valorSaque %= 50;

        int notas20 = valorSaque / 20;
        valorSaque %= 20;

        int notas10 = valorSaque / 10;
        valorSaque %= 10;

        int notas5 = valorSaque / 5;
        valorSaque %= 5;

        int notas2 = valorSaque / 2;
        valorSaque %= 2;

        int notas1 = valorSaque;

        String mensagem = valorSaque + "\n" +
                notas100 + " nota(s) de R$ 100,00\n" +
                notas50 + " nota(s) de R$ 50,00\n" +
                notas20 + " nota(s) de R$ 20,00\n" +
                notas10 + " nota(s) de R$ 10,00\n" +
                notas5 + " nota(s) de R$ 5,00\n" +
                notas2 + " nota(s) de R$ 2,00\n" +
                notas1 + " nota(s) de R$ 1,00";
        return mensagem;
    }
}
