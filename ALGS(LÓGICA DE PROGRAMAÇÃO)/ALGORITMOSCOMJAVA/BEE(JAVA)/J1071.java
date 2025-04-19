import java.util.Scanner;

public class J1071 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int X = 15;
        int Y = 12;
        Y++;


        int sum = 0;

        if (X > Y) {
            int temp = X;
            X = Y;
            Y = temp;
        }

        for (int i = X; i < Y; i++) {

            if (i % 2 != 0) {
                sum += i;
            }
        }

        System.out.println(sum);
    }
}
