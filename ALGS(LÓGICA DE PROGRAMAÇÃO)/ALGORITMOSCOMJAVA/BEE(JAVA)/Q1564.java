import java.util.Scanner;

public class Q1564 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (scanner.hasNext()) {
            int reclamacoes = scanner.nextInt();

            if (reclamacoes == 0) {
                System.out.println("vai ter copa!");
            } else {
                System.out.println("vai ter duas!");
            }
        }

        scanner.close();
    }
}
