import java.util.Scanner;

public class QUESTAO14 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME O ANO: ");
        int Ano = scanner.nextInt();
        System.out.println("INFORME O MÊS: ");
        int Mes = scanner.nextInt();
        System.out.println("INFORME O DIA: ");
        int Dia = scanner.nextInt();
        System.out.println(Thvm_funcoes.DataValida(Ano,Mes,Dia));
    }
}
