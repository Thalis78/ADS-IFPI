import java.util.Scanner;

public class QUESTAO11 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME A TEMPERATURA EM Fº: ");
        double Fahre = scanner.nextDouble();
        double Celsius = Thvm_funcoes.TemperaturaC(Fahre);

        System.out.println(Celsius);
    }
}
