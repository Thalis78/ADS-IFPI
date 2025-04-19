import java.util.Scanner;

public class Q2059 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String entrada = scanner.nextLine();
        String[] separarEntrada = entrada.split(" ");
        int p = Integer.parseInt(separarEntrada[0]);
        int j1 = Integer.parseInt(separarEntrada[1]);
        int j2 = Integer.parseInt(separarEntrada[2]);
        int r = Integer.parseInt(separarEntrada[3]);
        int a = Integer.parseInt(separarEntrada[4]);
        resultado(p, j1, j2, r, a);
    }

    public static void resultado(int p, int j1, int j2, int r, int a) {
        int soma = j1 + j2;
        int par = soma % 2;

        if (p == 1) {
            if ((par == 0 && r == 0) || (par == 0 && r == 1 && a == 0)) {
                System.out.println("Jogador 1 ganha!");
            }
            else if ((par != 0 && r == 0) || (par != 0 && r == 1 && a == 1)) {
                System.out.println("Jogador 2 ganha!");
            }
            else if (r == 1 && a == 0) {
                System.out.println("Jogador 1 ganha!");
            }
            else if (r == 1 && a == 1) {
                System.out.println("Jogador 2 ganha!");
            }
        }
        else if (p == 0) {
            if ((par != 0 && r == 0) || (par != 0 && r == 1 && a == 0)) {
                System.out.println("Jogador 1 ganha!");
            }
            else if ((par == 0 && r == 0) || (par == 0 && r == 1 && a == 1)) {
                System.out.println("Jogador 2 ganha!");
            }
            else if (r == 1 && a == 0) {
                System.out.println("Jogador 1 ganha!");
            }
            else if (r == 1 && a == 1) {
                System.out.println("Jogador 2 ganha!");
            }
        }
    }
}
