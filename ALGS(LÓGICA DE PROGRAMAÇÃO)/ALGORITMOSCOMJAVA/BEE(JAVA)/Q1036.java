import java.util.Scanner;

public class Q1036 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        double A = input.nextDouble();
        double B = input.nextDouble();
        double C = input.nextDouble();

        double delta = B * B - 4 * A * C;

        if (A == 0 || delta < 0) {
            System.out.println("Impossivel calcular");
        } else {
            double raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
            double raiz2 = (-B - Math.sqrt(delta)) / (2 * A);

            System.out.printf("R1 = %.5f%n", raiz1);
            System.out.printf("R2 = %.5f%n", raiz2);
        }

    }
}
