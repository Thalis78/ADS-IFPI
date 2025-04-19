import java.util.Scanner;

public class Q1175 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] X = new int[20];
        int [] X2 = new int[20];
        for (int i = 0; i < 20; i++) {
            X[i] = scanner.nextInt();
        }
        int indici = 0;
        for (int i = 19;i >= 0; i--){
            X2[indici] = X[i];
            indici++;
        }
        for (int i = 0; i < 20; i++) {
            System.out.printf("N[%d] = %d\n", i, X2[i]);
        }

        scanner.close();
    }
}