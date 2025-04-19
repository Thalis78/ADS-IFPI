import java.util.Scanner;

public class Q1858 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int Num = scanner.nextInt();
        int[] Array = new int[Num];
        scanner.nextLine();
        String Numero = scanner.nextLine();
        String[] StringArray = Numero.split(" ");
        int Min = 100;
        for(int i = 0;i < Array.length;i++) {
            Array[i] = Integer.parseInt(StringArray[i]);
            Min = Math.min(Min,Array[i]);
        }
        int count = 1;
        while (true){
            if(Array[count-1] == Min){
                break;
            }
            count++;
        }
        System.out.println(count);
    }
}
