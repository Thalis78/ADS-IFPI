import java.util.Scanner;

public class Q1179 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] par = new int[5];
        int[] impar = new int[5];
        int countPar = 0;
        int countImpar = 0;

        for (int i = 0; i < 15; i++) {
            int valor = scanner.nextInt();

            if (valor % 2 == 0) {
                if (countPar == 5) {
                    imprimirVetor(par, "par", countPar);
                    countPar = 0;
                }
                par[countPar] = valor;
                countPar++;
            } else {
                if (countImpar == 5) {
                    imprimirVetor(impar, "impar", countImpar);
                    countImpar = 0;
                }
                impar[countImpar] = valor;
                countImpar++;
            }
        }

        imprimirVetor(impar, "impar", countImpar);
        imprimirVetor(par, "par", countPar);

        scanner.close();
    }

    public static void imprimirVetor(int[] vetor, String tipo, int tamanho) {
        for (int i = 0; i < tamanho; i++) {
            System.out.println(tipo + "[" + i + "] = " + vetor[i]);
        }
    }
}
