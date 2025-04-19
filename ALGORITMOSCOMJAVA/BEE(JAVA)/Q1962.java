import java.util.Scanner;

public class Q1962 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();
        int[] anosTranscorridos = new int[N];
        for (int i = 0; i < N; i++) {
            anosTranscorridos[i] = scanner.nextInt();
        }

        for (int i = 0; i < N; i++) {
            int ano = 2015 - anosTranscorridos[i];
            if (ano <= 0) {
                System.out.println((Math.abs(ano)+1) + " A.C.");
            } else {
                System.out.println(ano + " D.C.");
            }
        }

        scanner.close();
    }
}