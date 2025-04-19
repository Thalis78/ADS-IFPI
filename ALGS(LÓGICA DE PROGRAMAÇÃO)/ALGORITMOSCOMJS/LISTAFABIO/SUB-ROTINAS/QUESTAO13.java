import java.util.Scanner;

public class QUESTAO13 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME UM NUMERO: ");
        int Num = scanner.nextInt();
        String Primo = Thvm_funcoes.NumPrimo(Num);

        System.out.println(Primo);
    }
}
