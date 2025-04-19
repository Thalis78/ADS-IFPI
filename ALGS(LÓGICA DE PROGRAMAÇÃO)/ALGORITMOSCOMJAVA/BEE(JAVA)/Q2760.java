import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String frase1 = scanner.nextLine();
        String frase2 = scanner.nextLine();
        String frase3 = scanner.nextLine();

        System.out.println(frase1 + frase2 + frase3);
        System.out.println(frase2 + frase3 + frase1);
        System.out.println(frase3 + frase1 + frase2);
        System.out.println(getSubstring(frase1) + getSubstring(frase2) + getSubstring(frase3));

        scanner.close();
    }

    private static String getSubstring(String frase) {
        return frase.length() > 10 ? frase.substring(0, 10) : frase;
    }
}
