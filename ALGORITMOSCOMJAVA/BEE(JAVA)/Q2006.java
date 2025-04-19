import java.util.Scanner;

public class Q2006 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int Tipochar = scanner.nextInt();
        scanner.nextLine();
        String EscolhaUsuario = scanner.nextLine();
        String[] ArrayEscolha = EscolhaUsuario.split(" ");
        int[] EscolhaNumUser = {Integer.parseInt(ArrayEscolha[0]),Integer.parseInt(ArrayEscolha[1]),Integer.parseInt(ArrayEscolha[2]),Integer.parseInt(ArrayEscolha[3]),Integer.parseInt(ArrayEscolha[4])};
        int QuantidadeChar = 0;
        for(int i = 0; i < EscolhaNumUser.length;i++){
            if(EscolhaNumUser[i] == Tipochar){
                QuantidadeChar++;
            }
        }
        System.out.println(QuantidadeChar);
    }
}
