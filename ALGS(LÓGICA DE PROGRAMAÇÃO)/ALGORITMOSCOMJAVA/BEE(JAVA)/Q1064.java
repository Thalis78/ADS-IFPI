import java.util.Scanner;

public class Q1064 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int numero01 = scanner.nextInt();
        int numero02 = scanner.nextInt();
        int numero03 = scanner.nextInt();
        double numero04 = scanner.nextDouble();
        double numero05 =  scanner.nextDouble();
        int numero06 = scanner.nextInt();
        int numero = 0;
        if(numero01 > 0){
            numero+=1;
        }if(numero02 > 0){
            numero+=1;
        }if(numero03 > 0){
            numero+=1;
        }if(numero04 > 0){
            numero+=1;
        }if(numero05 > 0){
            numero+=1;
        }if(numero06 > 0){
            numero+=1;
        }
        double Media = (numero01+numero02+numero03+numero04+numero05+numero06)/6;
        System.out.println(numero+" valores positivos");
        System.out.println(Media);
    }
}
