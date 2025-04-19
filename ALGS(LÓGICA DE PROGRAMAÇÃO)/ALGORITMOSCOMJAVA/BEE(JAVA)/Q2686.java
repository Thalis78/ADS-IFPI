import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String a;

        while (scanner.hasNextLine()) {
            a = scanner.nextLine();
            if (a.isEmpty()) break;

            double grau = Double.parseDouble(a);
            String periodo = "";

            if ((grau >= 0 && grau < 90) || grau == 360) {
                periodo = "Bom Dia!!";
            } else if (grau >= 90 && grau < 180) {
                periodo = "Boa Tarde!!";
            } else if (grau >= 180 && grau < 270) {
                periodo = "Boa Noite!!";
            } else {
                periodo = "De Madrugada!!";
            }

            int hora = (int) ((grau / 15) % 24) + 6;
            int minuto = (int) ((grau * 4) % 60);
            int segundo = (int) ((minuto * 60) % 60);

            if (hora >= 24) {
                hora -= 24;
            }

            System.out.println(periodo);
            System.out.printf("%02d:%02d:%02d%n", hora, minuto, segundo);
        }

        scanner.close();
    }
}
