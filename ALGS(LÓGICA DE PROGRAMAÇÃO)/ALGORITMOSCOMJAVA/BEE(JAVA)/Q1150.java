import java.util.Scanner;

public class Q1150 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int X = scanner.nextInt();
        int Z = scanner.nextInt();

        while (Z <= X) {
            Z = scanner.nextInt();
        }

        int soma = X;
        int quantidade = 1;
        while (soma <= Z) {
            X++;
            soma += X;
            quantidade++;
        }

        System.out.println(quantidade);
        scanner.close();
    }
}