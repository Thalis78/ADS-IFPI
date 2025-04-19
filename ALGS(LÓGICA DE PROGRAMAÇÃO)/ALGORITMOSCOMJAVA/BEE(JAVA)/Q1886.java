import java.util.Scanner;

public class Q1886{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int Vezes = scanner.nextInt();
        int Num = 0;
        for(int i = 0;i < Vezes;i++){
            Num = scanner.nextInt();
            if(Num%2 != 0){
                System.out.println(1);
            }else{
                System.out.println(0);
            }
        }
    }
}