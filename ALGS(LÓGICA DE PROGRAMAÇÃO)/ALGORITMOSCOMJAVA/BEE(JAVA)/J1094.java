import java.util.Scanner;

public class J1094 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int N = input.nextInt();
        int cobais = 0;
        int c = 0;
        int r = 0;
        int s = 0;
        int count = 1;
        while (count <= N) {
            String tipo = input.next();
            switch (tipo) {
                case "C":
                    c += 1;
                    break;
                case "R":
                    r += 1;
                    break;
                case "S":
                    s += 1;
                    break;
            }
            cobais += 1;
            count++;
        }
        System.out.println("Total: " + cobais + " cobaias");
        System.out.println("Total de coelhos: " + c);
        System.out.println("Total de ratos: " + r);
        System.out.println("Total de sapos: " + s);
        System.out.printf("Percentual de coelhos: %.2f %%\n", ((double) c / cobais) * 100);
        System.out.printf("Percentual de ratos: %.2f %%\n", ((double) r / cobais) * 100);
        System.out.printf("Percentual de sapos: %.2f %%\n", ((double) s / cobais) * 100);
    }
}
