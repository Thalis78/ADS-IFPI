import java.util.Scanner;

public class Q1038 {
    static Scanner input = new Scanner(System.in);
    public static void main(String[] args){
        int codigo01 = input.nextInt();
        int Quantidade = input.nextInt();
        double Array[] ={4.00,4.50,5.00,2.00,1.50};
        System.out.printf("Total: R$ "+(Array[codigo01-1]*Quantidade));
    }
}
