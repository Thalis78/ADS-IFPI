import java.util.Scanner;

public class Q1914 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int QT = scanner.nextInt();
        for (int i = 0; i < QT; i++) {
            String jogador1 = scanner.next();
            String escolha1 = scanner.next();

            String jogador2 = scanner.next();
            String escolha2 = scanner.next();

            int numero1 = scanner.nextInt();
            int numero2 = scanner.nextInt();

            int soma = numero1 + numero2;

            if (soma % 2 == 0) {
                if (escolha1.equals("PAR")) {
                    System.out.println(jogador1);
                } else {
                    System.out.println(jogador2);
                }
            } else {
                if (escolha1.equals("IMPAR")) {
                    System.out.println(jogador1);
                } else {
                    System.out.println(jogador2);
                }
            }
        }

        scanner.close();
    }
}