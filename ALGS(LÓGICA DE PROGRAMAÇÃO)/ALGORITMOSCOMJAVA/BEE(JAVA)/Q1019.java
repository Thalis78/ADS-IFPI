import java.util.Scanner;

public class Q1019 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int segundos = input.nextInt();
        int horas = 0;
        int minutos = 0;

        System.out.println(Conversao(segundos,horas,minutos));
    }
public static String Conversao(double segundos, int horas, int minutos){
        String mensagem = "";
        int seg = 0;
        if(segundos > 60){
            minutos = (int) Math.floor((segundos/60));
            horas = (int)(minutos/60);
            segundos = ((segundos/60) - minutos) * 60;
        }
        segundos = Math.round(segundos);
        seg = (int) segundos;
        mensagem = (horas+":"+minutos%60+":"+ seg);
        return mensagem;
}
}
