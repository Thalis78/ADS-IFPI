import java.util.Scanner;

public class QUESTAO04 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("INFORME UMA VELOCIDADE EM KM/H: ");
        double VelocidadeVKMH = scanner.nextDouble();
        double VelocidadeMS = Thvm_funcoes.VelocidaKm(VelocidadeVKMH);

        System.out.println(VelocidadeMS);
    }
}
