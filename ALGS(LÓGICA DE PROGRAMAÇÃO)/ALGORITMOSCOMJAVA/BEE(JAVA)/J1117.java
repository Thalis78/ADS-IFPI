import java.util.Scanner;

public class J1117 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double nota01, nota02;
    while (true) {
        do {
            System.out.println("DIGITE A PRIMEIRA NOTA: ");
            nota01 = input.nextDouble();
            if (nota01 < 0 || nota01 > 10) {
                System.out.println("nota invalida");
            }
        } while (nota01 < 0 || nota01 > 10);

        do {
            System.out.println("DIGITE A SEGUNDA NOTA: ");
            nota02 = input.nextDouble();
            if (nota02 < 0 || nota02 > 10) {
                System.out.println("nota invalida");
            }
        } while (nota02 < 0 || nota02 > 10);
        double media = (nota01 + nota02) / 2;
        System.out.printf("media = %.2f%n", media);
        System.out.println("novo calculo (1-sim 2-nao)");
        if(input.nextInt() == 2){
            break;
        }
    }

    }
}
