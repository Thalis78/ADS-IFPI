import java.util.Scanner;

public class Q1865 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int C = scanner.nextInt();

        for (int i = 0; i < C; i++) {
            String nome = scanner.next();
            int forca = scanner.nextInt();

            if (nome.equals("Thor") && forca >= 30) {
                System.out.println("Y");
            } else {
                System.out.println("N");
            }
        }

        scanner.close();
    }
}