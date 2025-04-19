public class Q1156 {
    public static void main(String[] args) {
        double S = 0;
        int numerador = 1;
        int denominador = 1;

        for (int i = 0; i < 20; i++) {
            S += (double) numerador / denominador;
            numerador += 2;
            denominador *= 2;
        }

        System.out.printf("%.2f\n", S);
    }
}