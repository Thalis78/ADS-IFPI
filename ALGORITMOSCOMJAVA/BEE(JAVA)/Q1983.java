import java.util.Scanner;

public class Q1983
{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();

        double maxNota = -1;
        int melhorAluno = -1;
        for (int i = 0; i < n; i++) {
            int matricula = scanner.nextInt();
            double nota = scanner.nextDouble();

            if (nota > maxNota) {
                maxNota = nota;
                melhorAluno = matricula;
            }
        }

        if (maxNota >= 8) {
            System.out.println(melhorAluno);
        } else {
            System.out.println("Minimum note not reached");
        }
    }
}
