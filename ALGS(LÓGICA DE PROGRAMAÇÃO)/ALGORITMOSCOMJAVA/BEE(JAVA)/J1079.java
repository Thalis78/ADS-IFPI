import java.text.DecimalFormat;
import java.util.Scanner;

public class J1079 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        double media = 0;
        int count = 1;
        while (count <= 3){
            System.out.println("INFORME O VALOR PRA N:");
            media+=input.nextDouble();
            count++;
        }
        DecimalFormat df = new DecimalFormat("#.0");
        double media_ponderada = (media / (count - 1));
        System.out.println(df.format(media_ponderada));
    }
}
