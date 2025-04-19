import java.util.Scanner;

public class Q1052 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        String mes[] = {"January","February","March","April","May","June","July","August","September","October","November","December"};
        int MesEscolhido = scanner.nextInt();
        System.out.println(mes[MesEscolhido-1]);
    }
}
