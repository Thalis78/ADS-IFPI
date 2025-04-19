import java.util.Scanner;

public class Q1040 {
    static Scanner input = new Scanner(System.in);
    public static void main(String[] args) {
        double n1 = input.nextInt();
        double n2 = input.nextInt();
        double n3 = input.nextInt();
        double n4 = input.nextInt();
        double Media = (n1 + n2 + n3 + n4) / 4;

        if (Media >= 7) {
            System.out.printf("\t\nMedia: %.1f%n", Media);
            System.out.println("Aluno aprovado.");
        } else if (Media >= 5) {
            double NotaExame = input.nextInt();
            double MediaFinal = (Media + NotaExame) / 2;
            if (MediaFinal >= 5) {
                System.out.printf("Media: %.1f%n", Media);
                System.out.println("Aluno em exame.");
                System.out.printf("Nota do exame: %.1f%n", NotaExame);
                System.out.println("Aluno aprovado.");
                System.out.printf("Media final: %.1f%n", MediaFinal);
            } else {
                System.out.printf("Media: %.1f%n", Media);
                System.out.println("Aluno em exame.");
                System.out.printf("Nota do exame: %.1f%n", NotaExame);
                System.out.println("Aluno reprovado.");
                System.out.printf("Media final: %.1f%n", MediaFinal);
            }
        } else {
            System.out.printf("Media: %.1f%n", Media);
            System.out.println("Aluno reprovado.");
        }
    }
}
