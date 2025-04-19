import java.util.Scanner;

public class J1132 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("INFORME O VALOR DE X: ");
        int X = input.nextInt();
        System.out.println("INFORME O VALOR DE Y: ");
        int Y = input.nextInt();
        int menor = Math.min(X, Y);
        int maior = Math.max(X, Y);
        int soma = 0;
        for (int i = menor; i <= maior; i++) {
            if (i % 13 != 0) {
                soma += i;
            }
        }
        System.out.println(soma);
    }
}