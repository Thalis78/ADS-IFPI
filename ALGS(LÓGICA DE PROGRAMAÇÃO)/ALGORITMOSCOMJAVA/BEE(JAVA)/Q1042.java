import java.util.Scanner;

public class Q1042 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int numero01 = input.nextInt();
        int numero02 = input.nextInt();
        int numero03 = input.nextInt();
        int MaiorNumero = numero01 > numero02 && numero01 > numero03 ? numero01 : numero02 > numero01 && numero02 > numero03 ? numero02 : numero03;
        int MenorNumero =numero01 < numero02 && numero01 < numero03 ? numero01 : numero02 < numero01 && numero02 < numero03 ? numero02 : numero03;
        int NumeroMeio = numero01 != MaiorNumero && numero01 != MenorNumero ? numero01 : numero02 != MaiorNumero && numero02 != MenorNumero ? numero02 : numero03;
        //NUMERO EM ORDEM CRESCENTE:
        System.out.println(MenorNumero);
        System.out.println(NumeroMeio);
        System.out.println(MaiorNumero);
        System.out.println("\n"+numero01);
        System.out.println(numero02);
        System.out.println(numero03);
    }
}
