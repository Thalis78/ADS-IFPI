import java.util.Scanner;

public class J1101 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.println("DIGA UM VALOR PARA N: ");
        int N = input.nextInt();
        System.out.println("DIGA UM VALOR PARA X: ");
        int M = input.nextInt();
        int soma = 0;
        while (true){
            System.out.print(N + " ");
            if(N >= M){
                soma+=N;
                System.out.print("Sum="+soma);
                break;
            }
            soma+=N;
            N++;
        }
    }
}
