import java.util.Scanner;

public class Q1541 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            int A = scanner.nextInt();
            if (A == 0) break;
            int B = scanner.nextInt();
            int C = scanner.nextInt();

            int areaCasa = A * B;

            int ladoTerreno = (int) Math.sqrt((double) (100 * areaCasa) / C);

            System.out.println(ladoTerreno);
        }

        scanner.close();
    }
}