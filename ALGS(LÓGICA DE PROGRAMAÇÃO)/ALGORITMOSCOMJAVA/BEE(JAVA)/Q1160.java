import java.util.Scanner;

public class Q1160 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int T = scanner.nextInt();
        for (int i = 0; i < T; i++) {
            int PA = scanner.nextInt();
            int PB = scanner.nextInt();
            double G1 = scanner.nextDouble();
            double G2 = scanner.nextDouble();

            int anos = calcularAnos(PA, PB, G1, G2);

            if (anos > 100) {
                System.out.println("Mais de 1 seculo.");
            } else {
                System.out.println(anos + " anos.");
            }
        }
    }

    private static int calcularAnos(int PA, int PB, double G1, double G2) {
        int anos = 0;
        while (PA <= PB) {
            PA += (int) (PA * G1 / 100);
            PB += (int) (PB * G2 / 100);
            anos++;
            if (anos > 100) {
                break;
            }
        }
        return anos;
    }
}