import java.util.Scanner;

public class Q1050 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int dd = input.nextInt();
        String cidade = "";
        String Cidade[] = {"Brasilia","Salvador","Sao Paulo","Rio de Janeiro","Juiz de Fora","Campinas","Vitoria", "Belo Horizonte"};
        if(dd == 61){
            cidade = Cidade[0];
        }if(dd == 71){
            cidade = Cidade[1];
        }if(dd == 11){
            cidade = Cidade[2];
        }if(dd == 21){
            cidade = Cidade[3];
        }if(dd == 32){
            cidade = Cidade[4];
        }if(dd == 19){
            cidade = Cidade[5];
        }if(dd == 27){
            cidade = Cidade[6];
        }if(dd == 31){
            cidade = Cidade[7];
        }
        System.out.println(cidade);
    }
}
