public class J1098 {
    public static void main(String[] args) {
        double i = 0;
        double j = 1;

        while (i <= 3) {
            while (j <= 3) {
                if (i % 1 == 0) {
                    System.out.printf("I=%.0f J=%.0f%n", i, j);
                } else {
                    System.out.printf("I=%.1f J=%.1f%n", i, j);
                }
                j++;
            }
            i += 0.2;
            j = 1 + i;
        }
    }
}
