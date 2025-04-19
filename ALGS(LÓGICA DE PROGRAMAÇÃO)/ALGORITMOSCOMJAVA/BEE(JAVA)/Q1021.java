import java.util.Scanner;

public class Q1021 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        double ValorSaque = 576.80;
        int Notas100 = 0;
        int Notas50 = 0;
        int Notas20 = 0;
        int Notas10 = 0;
        int Notas5 = 0;
        int Notas2 = 0;
        double moeda1 = 0;
        double moeda50 = 0;
        double moeda25 = 0;
        double moeda10 = 0;
        double moeda5 = 0;
        double moeda01 = 0;

        System.out.println(Saque(ValorSaque,Notas100,Notas50,Notas20,Notas10,Notas5,Notas2,moeda1,moeda50,moeda25,moeda10,moeda5,moeda01));

    }
    public static String Saque (double ValorSaque, int nota100,int nota50,int nota20, int nota10,int nota5, int nota2,double moeda1,double moeda50,double moeda25,double moeda10, double moeda5, double moeda01) {

        if (ValorSaque >= 100) {
            nota100 = (int) Math.floor(ValorSaque / 100);
            nota50 = (int) Math.floor((ValorSaque % 100) / 50);
            nota20 = (int) Math.floor(((ValorSaque % 100)%50) / 20);
            nota10 = (int) Math.floor((((ValorSaque % 100)%50)%20) / 10);
            nota5 = (int) Math.floor(((((ValorSaque % 100)%50)%20)%10) / 5);
            nota2 = (int) Math.floor((((((ValorSaque % 100)%50)%20)%10)%5)/ 2);
            moeda1 = (int) Math.floor(((((((ValorSaque % 100)%50)%20)%10)%5)%2)/1);
            moeda50 = (int) Math.floor((((((((ValorSaque % 100)%50)%20)%10)%5)%2) % 1)/0.50);
            moeda25 = (int) Math.floor((((((((ValorSaque % 100)%50)%20)%10)%5)%2) % 0.50)/0.25);
            moeda10 = (int) Math.floor((((((((ValorSaque % 100)%50)%20)%10)%5)%2) % 0.25)/0.10);
            moeda5 = (int) Math.floor((((((((ValorSaque % 100)%50)%20)%10)%5)%2) % 0.10)/0.5);
            moeda01 = Math.floor(((((((((ValorSaque % 100)%50)%20)%10)%5)%2) % 0.10) % 0.05));


        }
        if (ValorSaque < 100) {
            nota50 = (int) Math.floor((ValorSaque % 100) / 50);
            nota20 = (int) Math.floor(((ValorSaque % 100)%50) / 20);
            nota10 = (int) Math.floor((((ValorSaque % 100)%50)%20) / 10);
            nota5 = (int) Math.floor(((((ValorSaque % 100)%50)%20)%10) / 5);
            nota2 = (int) Math.floor((((((ValorSaque % 100)%50)%20)%10)%5)/ 2);
            moeda1 = (int) Math.floor(((((((ValorSaque % 100)%50)%20)%10)%5)%2) / 1);
            moeda50 = (int) Math.floor((((((((ValorSaque % 100)%50)%20)%10)%5)%2) % 1)/0.50);
            moeda25 = (int) Math.floor((((((((ValorSaque % 100)%50)%20)%10)%5)%2) % 0.50)/0.25);
            moeda10 = (int) Math.floor((((((((ValorSaque % 100)%50)%20)%10)%5)%2) % 0.25)/0.10);
            moeda5 = (int) Math.floor((((((((ValorSaque % 100)%50)%20)%10)%5)%2) % 0.10)/0.5);
            moeda01 =  Math.floor((((((((ValorSaque % 100)%50)%20)%10)%5)%2) % 0.5)/0.1);
        }
        String mensagem =   "NOTAS:\n" +
                nota100 + " nota(s) de R$ 100,00\n" +
                nota50 + " nota(s) de R$ 50,00\n" +
                nota20 + " nota(s) de R$ 20,00\n" +
                nota10 + " nota(s) de R$ 10,00\n" +
                nota5 + " nota(s) de R$ 5,00\n" +
                nota2 + " nota(s) de R$ 2,00\n" +
                "MOEDAS:\n"+
                (int) moeda1 + " moeda(s) de R$ 1.00\n"+
                (int) moeda50 + " moeda(s) de R$ 0.50\n"+
                (int) moeda25 + " moeda(s) de R$ 0.25\n"+
                (int) moeda10 + " moeda(s) de R$ 0.10\n"+
                (int) moeda5 + " moeda(s) de R$ 0.05\n"+
                 moeda01 + " moeda(s) de R$ 0.01\n";
        return mensagem;
    }



}

