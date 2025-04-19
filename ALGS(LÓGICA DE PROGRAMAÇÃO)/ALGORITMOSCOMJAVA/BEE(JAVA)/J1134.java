import java.util.Scanner;

public class J1134 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int Alcool = 0;
        int Gasolina = 0;
        int Diesel = 0;
        int fim = 0;

        while (fim != 1){
            int opcao = input.nextInt();
            switch (opcao){
                case 1:
                    Alcool+=1;
                    break;
                case 2:
                    Gasolina+=1;
                    break;
                case 3:
                    Diesel+=1;
                    break;
                case 4:
                    fim+=1;
                    break;
            }

        }

        System.out.println("MUITO OBRIGADO");
        System.out.println("Alcool: "+Alcool);
        System.out.println("Gasolina: "+Gasolina);
        System.out.println("Diesel: "+Diesel);
    }
}
