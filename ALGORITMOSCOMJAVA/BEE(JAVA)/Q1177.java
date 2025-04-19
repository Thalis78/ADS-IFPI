import java.util.Scanner;

public class Q1177 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        int V = scanner.nextInt();
        int[] N = new int[1000];
        int count = 0;
        for (int i = 1; i < 1000; i++) {
            if(count < V){
                count++;
                if(count == V){
                    count = 0;
                }
                N[i] = count;
            }
        }

        for (int i = 0; i < 1000; i++) {
            System.out.printf("N[%d] = %d\n", i, N[i]);
        }

    }
}
