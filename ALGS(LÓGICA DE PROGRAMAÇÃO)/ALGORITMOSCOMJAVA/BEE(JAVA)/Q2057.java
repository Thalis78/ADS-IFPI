import java.util.Scanner;

public class Q2057 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int S = scanner.nextInt();
        int T = scanner.nextInt();
        int F = scanner.nextInt();

        int horaChegada = S + T + F;

        if (horaChegada >= 24) {
            horaChegada -= 24;
        }

        System.out.println(horaChegada >= 0 ? horaChegada : 24 + horaChegada);

        scanner.close();
    }
}
