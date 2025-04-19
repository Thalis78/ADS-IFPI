import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = Integer.parseInt(scanner.nextLine());
        List<String> palavras = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            palavras.add(scanner.nextLine());
        }

        int q = Integer.parseInt(scanner.nextLine());

        for (int i = 0; i < q; i++) {
            String consulta = scanner.nextLine();
            List<String> sugestoes = new ArrayList<>();

            for (String palavra : palavras) {
                if (palavra.startsWith(consulta)) {
                    sugestoes.add(palavra);
                }
            }

            if (!sugestoes.isEmpty()) {
                int maior = sugestoes.stream().mapToInt(String::length).max().orElse(0);
                System.out.println(sugestoes.size() + " " + maior);
            } else {
                System.out.println("-1");
            }
        }

        scanner.close();
    }
}
