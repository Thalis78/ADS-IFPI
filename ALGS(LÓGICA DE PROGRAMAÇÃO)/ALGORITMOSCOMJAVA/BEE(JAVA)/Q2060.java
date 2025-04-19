import java.util.Scanner;

public class Q2060 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int Num = scanner.nextInt();
        int[] Array = new int[Num];
        scanner.nextLine();
        String Numero = scanner.nextLine();
        String[] StringArray = Numero.split(" ");
        for(int i = 0;i < Array.length;i++) {
            Array[i] = Integer.parseInt(StringArray[i]);
        }
        int MultiploDois = 0;
        int MultiploTres = 0;
        int MultiploQuatro = 0;
        int MultiploCinco = 0;
        for(int i = 0; i < Array.length;i++){
            if(Array[i]%2 == 0){
                MultiploDois++;
            }if(Array[i]%3 == 0){
                MultiploTres++;
            }if(Array[i]%4 == 0){
                MultiploQuatro++;
            }if(Array[i]%5 == 0){
                MultiploCinco++;
            }
        }

        System.out.println(MultiploDois + " Multiplo(s) de 2");
        System.out.println(MultiploTres + " Multiplo(s) de 3");
        System.out.println(MultiploQuatro + " Multiplo(s) de 4");
        System.out.println(MultiploCinco + " Multiplo(s) de 5");

    }



}