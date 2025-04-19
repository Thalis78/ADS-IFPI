import java.util.Scanner;

public class J1142 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.println("INFORME UM NUMERO: ");
        int N = input.nextInt();
        int sequencia = 1;
        int count = 1;
        int num = 1;
        while (count <= N){
            System.out.print(sequencia  + " ");
            sequencia*=count;
            if(num == 3){
                System.out.println();
                num =0;
                count +=1;
                sequencia = count;
            }
            num++;

        }
    }
}
