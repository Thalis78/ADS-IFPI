import java.util.Scanner;

public class Q1157 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        for(int count = 1;count <= N;count++){
            if(N%count == 0){
                System.out.println(count);
            }
        }
    }
}