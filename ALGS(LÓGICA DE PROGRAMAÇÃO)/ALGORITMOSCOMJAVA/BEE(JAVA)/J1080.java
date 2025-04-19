import java.util.Scanner;

public class J1080 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int maiornum = -1;
        int posicaonum = 1;
        int posicao = 1;
        while (posicao <= 100){
            int num = input.nextInt();
            if (maiornum < num){
                maiornum = num;
                posicaonum++;
            }
            posicao++;
        }
        System.out.println(maiornum);
        System.out.println(posicaonum);
    }
}
