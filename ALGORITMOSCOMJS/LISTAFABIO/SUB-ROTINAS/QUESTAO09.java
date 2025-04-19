import java.util.Scanner;

public class QUESTAO09 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME O RAIO: ");
        double raio = scanner.nextDouble();
        double volume = Thvm_funcoes.VolumeEsfera(raio);

        System.out.println(volume);

    }
}
