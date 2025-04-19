import java.util.Scanner;

public class J1078 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.println("INFORME O VALOR DE X: ");
        int X = input.nextInt();
        int count = 1;
        while (count <= 10){
            int multiplica = X * count;
            System.out.println(count +  " x " + X + " = " + multiplica);
            count++;
        }
    }
}
