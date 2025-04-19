import java.util.Scanner;

public class Q1061 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        scanner.next();
        int diaInicio = scanner.nextInt();

        int horaInicio = scanner.nextInt();
        scanner.next();
        int minutoInicio = scanner.nextInt();
        scanner.next();
        int segundoInicio = scanner.nextInt();

        scanner.next();
        int diaTermino = scanner.nextInt();

        int horaTermino = scanner.nextInt();
        scanner.next();
        int minutoTermino = scanner.nextInt();
        scanner.next();
        int segundoTermino = scanner.nextInt();

        long totalSegundosTermino = diaTermino * 86400 + horaTermino * 3600 + minutoTermino * 60 + segundoTermino;
        long totalSegundosInicio = diaInicio * 86400 + horaInicio * 3600 + minutoInicio * 60 + segundoInicio;

        long diferencaSegundos = totalSegundosTermino - totalSegundosInicio;

        int duracaoDias = (int) (diferencaSegundos / 86400);
        diferencaSegundos %= 86400;
        int duracaoHoras = (int) (diferencaSegundos / 3600);
        diferencaSegundos %= 3600;
        int duracaoMinutos = (int) (diferencaSegundos / 60);
        int duracaoSegundos = (int) (diferencaSegundos % 60);

        System.out.println(duracaoDias + " dia(s)");
        System.out.println(duracaoHoras + " hora(s)");
        System.out.println(duracaoMinutos + " minuto(s)");
        System.out.println(duracaoSegundos + " segundo(s)");

        scanner.close();
    }
}