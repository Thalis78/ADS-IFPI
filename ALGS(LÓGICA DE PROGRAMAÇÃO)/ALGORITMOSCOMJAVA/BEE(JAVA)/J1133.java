import java.util.Scanner;

public class J1133{
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("INFORME O VALOR DE X: ");
        int X = input.nextInt();
        System.out.println("INFORME O VALOR DE Y: ");
        int Y = input.nextInt();
        int menor = Math.min(X, Y);
        int maior = Math.max(X, Y);
        int i = menor;
        while(i<= maior) {
            i++;
            if (i % 5 == 2 || i % 5 == 3) {
                System.out.println(i);
            }
        }
    }
}