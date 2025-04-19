import java.util.Scanner;

public class Q1154 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int idade;
        int somaIdades = 0;
        int totalIndividuos = 0;

        while ((idade = scanner.nextInt()) >= 0) {
            somaIdades += idade;
            totalIndividuos++;
        }

        if (totalIndividuos > 0) {
            double media = (double) somaIdades / totalIndividuos;
            System.out.printf("%.2f\n", media);
        } else {
            System.out.println("Nenhuma idade foi inserida.");
        }
    }
}