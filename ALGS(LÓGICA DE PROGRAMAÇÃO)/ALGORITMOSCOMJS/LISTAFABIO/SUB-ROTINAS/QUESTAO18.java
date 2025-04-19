import java.util.Scanner;

public class QUESTAO18 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME A QUANTIDADE DE LINHAS");
        int QuantidadeLinha = scanner.nextInt();
        Thvm_funcoes.LinhaVertical(QuantidadeLinha);
    }
}
