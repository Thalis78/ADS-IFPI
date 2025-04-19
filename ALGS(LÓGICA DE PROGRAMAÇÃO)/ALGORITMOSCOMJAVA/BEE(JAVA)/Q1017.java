import java.util.Scanner;

public class Q1017 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int ValorSaque = 576;
        int Notas100 = 0;
        int Notas50 = 0;
        int Notas20 = 0;
        int Notas10 = 0;
        int Notas5 = 0;
        int Notas2 = 0;
        int Notas1 = 0;

       System.out.println(Saque(ValorSaque,Notas100,Notas50,Notas20,Notas10,Notas5,Notas2,Notas1));

    }
public static String Saque (int ValorSaque, int nota100,int nota50,int nota20, int nota10,int nota5, int nota2,int nota1) {

    if (ValorSaque >= 100) {
        nota100 = (int) Math.floor(ValorSaque / 100);
        nota50 = (int) Math.floor((ValorSaque % 100) / 50);
        nota20 = (int) Math.floor(((ValorSaque % 100)%50) / 20);
        nota10 = (int) Math.floor((((ValorSaque % 100)%50)%20) / 10);
        nota5 = (int) Math.floor(((((ValorSaque % 100)%50)%20)%10) / 5);
        nota2 = (int) Math.floor((((((ValorSaque % 100)%50)%20)%10)%5)/ 2);
        nota1 = (int) Math.floor(((((((ValorSaque % 100)%50)%20)%10)%5)%2) / 1);
    }
    if (ValorSaque < 100) {
        nota50 = (int) Math.floor((ValorSaque % 100) / 50);
        nota20 = (int) Math.floor(((ValorSaque % 100)%50) / 20);
        nota10 = (int) Math.floor((((ValorSaque % 100)%50)%20) / 10);
        nota5 = (int) Math.floor(((((ValorSaque % 100)%50)%20)%10) / 5);
        nota2 = (int) Math.floor((((((ValorSaque % 100)%50)%20)%10)%5)/ 2);
        nota1 = (int) Math.floor(((((((ValorSaque % 100)%50)%20)%10)%5)%2) / 1);
    }
    String mensagem = ValorSaque + "\n" +
            nota100 + " nota(s) de R$ 100,00\n" +
            nota50 + " nota(s) de R$ 50,00\n" +
            nota20 + " nota(s) de R$ 20,00\n" +
            nota10 + " nota(s) de R$ 10,00\n" +
            nota5 + " nota(s) de R$ 5,00\n" +
            nota2 + " nota(s) de R$ 2,00\n" +
            nota1 + " nota(s) de R$ 1,00";
    return mensagem;
    }



}
