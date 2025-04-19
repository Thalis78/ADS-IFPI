import java.util.Scanner;

public class Q1066 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int numero01 = -5;
        int numero02 = 0;
        int numero03 = -3;
        int numero04 = -4;
        int numero05 = 12;
        int NumeroNegativo = 5;
        int NumeroPositivo = 0;
        int num = 0;
        int numfinal = 5;
        if(numero01%2 == 0){
            NumeroPositivo++;
            NumeroNegativo--;
        }if(numero02%2 == 0){
            NumeroPositivo++;
            NumeroNegativo--;

        }if(numero03%2 == 0){
            NumeroPositivo++;
            NumeroNegativo--;

        }if(numero04%2 == 0){
            NumeroPositivo++;
            NumeroNegativo--;

        }if(numero05%2 == 0){
            NumeroPositivo++;
            NumeroNegativo--;

        }
        if(numero01 > 0){
            num++;
            numfinal--;
        }if(numero02 > 0){
            num++;
            numfinal--;
        }if(numero03 > 0){
            num++;
            numfinal--;
        }if(numero04 > 0){
            num++;
            numfinal--;
        }if(numero05 > 0){
            num++;
            numfinal--;
        }
        System.out.println(NumeroPositivo+" valor(es) par(es)");
        System.out.println(NumeroNegativo+" valor(es) impar(es)");
        System.out.println(num+" valor(es) positivo(s)");
        System.out.println(numfinal-1+" valor(es) negativo(s)");

}}
