import java.util.Scanner;

public class QUESTAO08 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME O raio DA CIRCUFERÊNCIA: ");
        double raio = scanner.nextDouble();
        double comprimento = Thvm_funcoes.ComprimentoCircuferencia(raio);

        System.out.println(comprimento);
    }
}
