import java.util.Scanner;

public class J1116 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int N = input.nextInt(); // Leitura da quantidade de pares de números
        for (int i = 0; i < N; i++) { // Loop para cada par de números
            int X = input.nextInt();
            int Y = input.nextInt();

            if (Y == 0) {
                System.out.println("divisao impossivel");
            } else {
                double divisao = (double) X / Y;
                System.out.printf("%.1f\n", divisao); // Imprime o resultado com uma casa decimal
            }
        }
    }
}
