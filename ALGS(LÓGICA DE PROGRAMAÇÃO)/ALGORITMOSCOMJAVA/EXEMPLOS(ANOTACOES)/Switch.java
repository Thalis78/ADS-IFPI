import java.util.Scanner;

public class Switch {
    public static void main(String[] args){
        /*EXERCICIO SIMPLES: PEÇA AO USUARIO QUE DIGITE UM NUMERO ENTRE 1 A 7, E MOSTRE O DIA DA SEMANA ENTRE 1 A 7; 1 - DOMINGO,2-SEGUNDA,ETC....*/
        Scanner input = new Scanner(System.in);
        System.out.println("--->DIGITE UM NUMERO ENTRE 1 A 7:");
        int resultado = input.nextInt();
        switch (resultado){
            case 1:
                System.out.println("--->DOMINGO");
                break;
            case 2:
                System.out.println("--->SEGUNDA-FEIRA");
                break;
            case 3:
                System.out.println("--->TERÇA-FEIRA");
                break;
            case 4:
                System.out.println("--->QUARTA-FEIRA");
                break;
            case 5:
                System.out.println("--->QUINTA-FEIRA");
                break;
            case 6:
                System.out.println("--->SEXTA-FEIRA");
                break;
            case 7:
                System.out.println("--->SABADO");
                break;
            default:
                System.out.println("ESCOLHA UMA DAS OPÇÕES ACIMA");
        }


    }
}
