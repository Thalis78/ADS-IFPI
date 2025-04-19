public class J1095 {
    public static void main(String[] main){
        int I = 1;
        int J = 60;
        while (true){
            System.out.println("I="+ I + " J=" + J);
            I+=3;
            J-=5;
            if(J < 0){
                break;
            }

        }
    }
}
