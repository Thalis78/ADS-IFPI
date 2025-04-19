import java.util.Scanner;

public class Q1015 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        double X1 = 1.0;
        double Y1 = 7.0;
        double X2 = 5.0;
        double Y2 = 9.0;

        double calculo01 = ((X2 - X1)*(X2 - X1));
        double calculo02 = ((Y2 - Y1)*(Y2 - Y1));
        double Raiz = Math.sqrt(calculo01 + calculo02);

        System.out.printf("%.4f%n",Raiz);

    }
}
