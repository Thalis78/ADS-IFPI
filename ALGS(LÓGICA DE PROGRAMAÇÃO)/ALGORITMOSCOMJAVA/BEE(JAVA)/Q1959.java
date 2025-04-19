import java.util.Scanner;

public class Q1959 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt(); // Número de lados
        int L = scanner.nextInt(); // Comprimento de cada lado

        long perimetro = (long) N * L; // Calcula o perímetro como um longo para evitar estouro de inteiros

        System.out.println(perimetro); // Exibe o perímetro
    }
}
