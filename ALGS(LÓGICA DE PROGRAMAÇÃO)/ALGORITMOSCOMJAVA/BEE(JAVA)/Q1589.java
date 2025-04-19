import java.util.Scanner;

public class Q1589 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Lê os dados de entrada
        int S = scanner.nextInt(); // Hora de saída
        int T = scanner.nextInt(); // Tempo de viagem
        int F = scanner.nextInt(); // Fuso horário do destino

        // Calcula a hora de chegada no destino
        int horaChegada = S + T + F;

        // Verifica se a hora de chegada ultrapassa 24 horas
        if (horaChegada >= 24) {
            horaChegada -= 24;
        }

        // Imprime a hora de chegada
        System.out.println(horaChegada >= 0 ? horaChegada : 24 + horaChegada);

        scanner.close();
    }
}
