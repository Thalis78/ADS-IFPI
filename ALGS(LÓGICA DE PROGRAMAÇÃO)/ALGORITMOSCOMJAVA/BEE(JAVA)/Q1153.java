import java.util.Scanner;

public class Q1153 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        int fatorial = 1;

        for (int i = 1; i <= N; i++) {
            fatorial *= i;
        }

        System.out.println(fatorial);
    }
}