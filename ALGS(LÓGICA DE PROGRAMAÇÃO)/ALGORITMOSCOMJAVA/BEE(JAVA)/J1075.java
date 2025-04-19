import java.util.Scanner;

public class J1075 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.print("INFORME O VALOR DE N: ");
        int N = input.nextInt();
        int resto = 2;
        while(resto < 10000){
            System.out.println(resto);
            resto+=N;
        }
    }
}
