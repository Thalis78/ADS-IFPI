import java.util.Scanner;

public class QUESTAO02 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME O VALOR DE HORAS: ");
        double Horas = scanner.nextDouble();
        System.out.println("INFORME O VALOR DE MINUTOS: ");
        int Minutos = scanner.nextInt();
        double TotalMinutos = Thvm_funcoes.minutos(Horas,Minutos);

        System.out.println(TotalMinutos);
    }
}
