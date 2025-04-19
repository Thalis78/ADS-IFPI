import java.util.Scanner;

public class J1074 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.print("QUANTOS NUMEROS VOCÊ QUER 'N':");
        int N = input.nextInt();
        int count = 1;
        while (count <= N){
            System.out.print("INFORME UM VALOR PARA X");
            int X = input.nextInt();
            if(X < 0 ){
                System.out.print(X % 2 != 0?"\nODD NEGATIVE":"\nEVEN NEGATIVE");
            }
            if(X > 0){
                System.out.print(X % 2 != 0?"\nODD POSITIVE":"\nEVEN POSITIVE");
            }
            if(X == 0){
                System.out.print("\nNULL");
            }
            count++;
        }
    }
}
