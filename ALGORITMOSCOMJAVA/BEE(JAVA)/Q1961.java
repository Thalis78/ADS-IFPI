import java.util.Scanner;

public class Q1961 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int alturaPulo = scanner.nextInt();
        int numCanos = scanner.nextInt();

        int[] alturas = new int[numCanos];
        for (int i = 0; i < numCanos; i++) {
            alturas[i] = scanner.nextInt();
        }

        scanner.close();

        boolean podeVencer = true;
        for (int i = 0; i < numCanos - 1; i++) {
            int diferencaAltura = Math.abs(alturas[i] - alturas[i + 1]);
            if (diferencaAltura > alturaPulo) {
                podeVencer = false;
                break;
            }
        }

        if (podeVencer) {
            System.out.println("YOU WIN");
        } else {
            System.out.println("GAME OVER");
        }
    }
}
