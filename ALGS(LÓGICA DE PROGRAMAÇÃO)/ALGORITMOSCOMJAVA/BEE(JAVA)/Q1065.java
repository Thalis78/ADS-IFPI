import java.util.Scanner;

public class Q1065 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int numero01 = scanner.nextInt()%2;
        int numero02 = scanner.nextInt()%2;
        int numero03 = scanner.nextInt()%2;
        int numero04 = scanner.nextInt()%2;
        int numero05 = scanner.nextInt()%2;
        int NumeroPositivo = 0;
        if(numero01 == 0){
            NumeroPositivo++;
        }if(numero02 == 0){
            NumeroPositivo++;
        }if(numero03 == 0){
            NumeroPositivo++;
        }if(numero04 == 0){
            NumeroPositivo++;
        }if(numero05 == 0){
            NumeroPositivo++;
        }
        System.out.println(NumeroPositivo+" valores pares");
    }
}
