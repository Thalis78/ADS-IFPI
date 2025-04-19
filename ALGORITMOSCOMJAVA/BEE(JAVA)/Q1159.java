import java.util.Scanner;

public class Q1159 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int Soma = 0;
        int count = 0;
        while (true){
            int X = scanner.nextInt();
            if(X == 0){
                break;
            }else{
                Soma = 0;
                while (true){
                    if(count == 5){
                        count = 0;
                        break;
                    }
                    if(X%2 == 0){
                        Soma+=X;
                        count++;
                    }
                    X++;
                }
                System.out.println(Soma);
            }
        }
    }
}