import java.util.Scanner;

public class QUESTAO10 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME A TEMPERATURA EM Cº:");
        double celsius = scanner.nextDouble();
        double Fahre = Thvm_funcoes.TemperaturaF(celsius);

        System.out.println(Fahre);
    }
}
