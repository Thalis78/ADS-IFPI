import java.util.Scanner;

public class QUESTAO15 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME O PRIMEIRO NUMERO: ");
        int Num1 = scanner.nextInt();
        System.out.println("INFORME O SEGUNDO NUMERO: ");
        int Num2 = scanner.nextInt();
        System.out.println(Thvm_funcoes.MMC(Num1,Num2));
    }
}
