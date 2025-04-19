public class J1096 {
    public static void main(String[] main){
        int I = 1;
        int J = 7;
        while (true){
            System.out.println("I="+ I + " J=" + J);
            J-=1;
            if(J < 5){
                I+=2;
                J=7;
            }
            if(I > 10){
                break;
            }


        }
    }
}