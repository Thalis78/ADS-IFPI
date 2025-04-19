import java.util.Scanner;

public class QUESTAO06 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME O VALOR DO LADO DO QUADRADO:");
        double LadoQuadrado = scanner.nextDouble();
        double areaquadrado = Thvm_funcoes.AreaQuadrado(LadoQuadrado);

        System.out.println(areaquadrado);
    }
}
