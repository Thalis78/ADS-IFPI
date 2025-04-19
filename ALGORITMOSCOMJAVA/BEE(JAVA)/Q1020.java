import java.util.Scanner;

public class Q1020 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int dias = 40;
        int ano = 0;
        int mes = 0;
        int dia = 0;
        System.out.println(Conversao(dias, ano,mes, dia));
    }
    public static String Conversao(double dias, double ano,double mes, double dia){
        String mensagem = "";
        if(dias >= 365){
            ano = (dias / 365);
            mes = (dias%365);
            dia = mes%30;
            mes = (mes/30);
        }
        if(dias < 365){
            mes = (dias/30);
            dia = dias%30;
        }
        mensagem =  (int) ano+" ano(s)\n" +
                (int)(mes)+" mes(es)\n" +
                (int) dia+" dia(s)";
        return mensagem;
    }
}
