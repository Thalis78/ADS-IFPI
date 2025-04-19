import java.util.Scanner;

public class Q2029 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (scanner.hasNext()) {
            double volume = scanner.nextDouble();
            double diametro = scanner.nextDouble();

            double raio = diametro / 2.0;
            double altura = volume / (3.14 * raio * raio);
            double areaBoca = 3.14 * raio * raio;

            System.out.printf("ALTURA = %.2f\n", altura);
            System.out.printf("AREA = %.2f\n", areaBoca);
        }

        scanner.close();
    }
}
