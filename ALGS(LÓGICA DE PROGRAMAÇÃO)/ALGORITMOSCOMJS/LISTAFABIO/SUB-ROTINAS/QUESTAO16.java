import java.util.Scanner;

public class QUESTAO16 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME O PRIMEIRO NUM: ");
        int Num01 = scanner.nextInt();
        System.out.println("INFORME O SEGUNDO NUM: ");
        int Num02 = scanner.nextInt();
        System.out.println(Thvm_funcoes.MDC(Num01,Num02));
    }
}
