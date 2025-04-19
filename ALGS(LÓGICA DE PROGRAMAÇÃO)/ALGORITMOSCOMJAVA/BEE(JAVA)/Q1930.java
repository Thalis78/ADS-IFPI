import java.util.Scanner;

public class Q1930 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        String Num = scanner.nextLine();
        String[] StringNum = Num.split(" ");
        int[] abcd = new int[4];
        for (int i = 0; i < StringNum.length; i++) {
            abcd[i] = Integer.parseInt(StringNum[i]);
        }
        int Soma = (abcd[0] + abcd[1] + abcd[2] + abcd[3]) - 3;
        System.out.println(Soma);

    }
}