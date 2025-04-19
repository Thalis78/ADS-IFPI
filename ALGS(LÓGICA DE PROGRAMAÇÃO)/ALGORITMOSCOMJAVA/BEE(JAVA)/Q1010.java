import java.util.Scanner;

public class Q1010 {
static Scanner input = new Scanner(System.in);
    public static void main(String[] args){

        int Codigo01 = input.nextInt();
        int Peca01 = input.nextInt();
        Double Valor01 = input.nextDouble();
        Double ValorTotal01 = (Peca01 * Valor01);

        int Codigo02 = input.nextInt();
        int Peca02 = input.nextInt();
        Double Valor02 = input.nextDouble();
        Double ValorTotal02 = (Peca02 * Valor02);
        Double ValorPago = (ValorTotal01+ValorTotal02);
        System.out.printf("VALOR A PAGAR: R$ %.2f%n",ValorPago);
}}
