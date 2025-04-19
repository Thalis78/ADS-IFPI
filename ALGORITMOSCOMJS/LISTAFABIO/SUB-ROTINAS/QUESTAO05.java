import java.util.Scanner;

public class QUESTAO05 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME A BASE DO TRIÂNGULO: ");
        double base = scanner.nextDouble();
        System.out.println("INFORME A ALTURA DO TRIÂNGULO: ");
        double altura = scanner.nextDouble();
        double Area = Thvm_funcoes.AreaTriangulo(base,altura);

        System.out.println(Area);
    }
}
