import java.util.Scanner;

public class Q1046 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int horaInicial = scanner.nextInt();
        int horaFinal = scanner.nextInt();

        int duracao;

        if (horaFinal > horaInicial) {
            duracao = horaFinal - horaInicial;
        } else {
            duracao = 24 - horaInicial + horaFinal;
        }

        System.out.println("O JOGO DUROU " + duracao + " HORA(S)");

        scanner.close();
    }
}
