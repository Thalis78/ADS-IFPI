import java.util.Scanner;

public class J1073 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        System.out.print("INFORME UM VALOR PARA X: ");
        int X = input.nextInt();
        int Y = 1;
        while (true){
            Y++;
            if(Y % 2 == 0){
                int quadrado = Y*Y;
                System.out.print("\n" + Y +" ^ " + "2" + " = " +quadrado);
                if(Y == X){
                    break;
                }
            }
        }
    }
}
