import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] strings = new String[3];

        for (int i = 0; i < 3; i++) {
            strings[i] = scanner.nextLine();
        }

        System.out.println("A = " + strings[0] + ", B = " + strings[1] + ", C = " + strings[2]);
        System.out.println("A = " + strings[1] + ", B = " + strings[2] + ", C = " + strings[0]);
        System.out.println("A = " + strings[2] + ", B = " + strings[0] + ", C = " + strings[1]);

        scanner.close();
    }
}
