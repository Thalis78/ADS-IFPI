import java.util.Scanner;

public class QUESTAO07 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME A BASE DO RETÂNGULO: ");
        double base = scanner.nextDouble();
        System.out.println("INFORME A ALTURA DO RETÂNGULO:");
        double altura = scanner.nextDouble();
        double Area = Thvm_funcoes.AreaRetangulo(base,altura);

        System.out.println(Area);
    }
}
