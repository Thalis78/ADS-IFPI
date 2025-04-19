import java.util.Scanner;

public class Q2146 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (scanner.hasNext()) {
            int numero = scanner.nextInt();
            int senha = numero - 1;
            System.out.println(senha);
        }

        scanner.close();
    }
}