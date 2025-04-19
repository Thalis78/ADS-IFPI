import java.util.Scanner;

public class Q1789 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (scanner.hasNext()) {
            int L = scanner.nextInt();
            int[] velocidades = new int[L];
            for (int i = 0; i < L; i++) {
                velocidades[i] = scanner.nextInt();
            }

            int velocidadeMaxima = Integer.MIN_VALUE;
            for (int velocidade : velocidades) {
                if (velocidade > velocidadeMaxima) {
                    velocidadeMaxima = velocidade;
                }
            }

            char nivel;
            if (velocidadeMaxima < 10) {
                nivel = '1';
            } else if (velocidadeMaxima < 20) {
                nivel = '2';
            } else {
                nivel = '3';
            }

            System.out.println(nivel);
        }
    }
}