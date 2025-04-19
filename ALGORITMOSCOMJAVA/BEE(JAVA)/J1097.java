public class J1097 {
    public static void main(String[] main){
        int I = 1;
        int J = 7;
        int anterior = J;
        int condicao = J - 2;
        while (true){
            System.out.println("I="+ I + " J=" + J);
            J --;
            if(J < condicao){
                I+=2;
                J=anterior+2;
                condicao+=2;
                anterior = J;
            }
            if(I > 10){
                break;
            }


        }
    }
}
