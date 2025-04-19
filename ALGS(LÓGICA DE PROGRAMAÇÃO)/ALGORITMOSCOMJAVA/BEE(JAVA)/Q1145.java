public class Q1145 {
    public static void main(String[] args){
        int X = 1;
        int Y = 99;
        int contagem = 1;
        while (true){
            System.out.print(contagem+" ");
            if(X % 3 == 0){
                System.out.print("\n");

            }if(X >= Y){
                break;
            }
            X++;
            contagem++;
        }
    }
}
