import java.util.Scanner;

public class QUESTAO01{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME UMA VELOCIDADE EM M/S: ");
        double VelocidadeMS = scanner.nextInt();
        double VelocidadeVKMH = Thvm_funcoes.Velocidade(VelocidadeMS);

        System.out.println(VelocidadeVKMH);
    }
}
