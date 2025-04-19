import java.util.Scanner;

public class QUESTAO03 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME UM VALOR EM DOLARES: U$");
        double Dolar = scanner.nextDouble();
        double Real = Thvm_funcoes.Real(Dolar);

        System.out.println(Real);
    }
}
