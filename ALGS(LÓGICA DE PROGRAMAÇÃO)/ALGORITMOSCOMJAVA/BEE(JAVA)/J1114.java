import java.util.Scanner;

public class J1114 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int senha = 2002;
        while (true){
            System.out.println("DIGITE A SENHA: ");
            if(input.nextInt() == senha){
                System.out.println("Acesso Permitido");
                break;
            }
            else{
                System.out.println("Senha Invalida");
            }
        }
    }
}

