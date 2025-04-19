import java.util.Scanner;

public class Q2139 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] calendario = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

        while (scanner.hasNext()) {
            int mes = scanner.nextInt();
            int dia = scanner.nextInt();

            int diasRestantes = calcularDiasAteNatal(mes, dia, calendario);

            if (mes == 12 && dia == 24) {
                System.out.println("E vespera de natal!");
            } else if (mes == 12 && dia == 25) {
                System.out.println("E natal!");
            } else if (mes == 12 && dia > 25) {
                System.out.println("Ja passou!");
            } else {
                System.out.printf("Faltam %d dias para o natal!\n", diasRestantes);
            }
        }
    }

    public static int calcularDiasAteNatal(int mes, int dia, int[] calendario) {
        int dias = 0;

        for (int i = mes - 1; i < 12; i++) {
            if (i == mes - 1) {
                dias += calendario[i] - dia;
            } else {
                dias += calendario[i];
            }
        }

        return dias - 6;
    }
}
