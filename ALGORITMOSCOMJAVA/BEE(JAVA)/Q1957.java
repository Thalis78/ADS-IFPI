import java.util.Scanner;

public class Q1957 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int numeroDecimal = scanner.nextInt();
        
        String numeroHexadecimal = Integer.toHexString(numeroDecimal).toUpperCase();
        
        System.out.println(numeroHexadecimal);
    }
}
