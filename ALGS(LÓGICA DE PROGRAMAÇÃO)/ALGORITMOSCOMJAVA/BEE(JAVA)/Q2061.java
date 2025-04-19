import java.util.Scanner;

public class Q2061 {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        String Abas = scanner.nextLine();
        String[] AbasSeparada = Abas.split(" ");
        int AbasIni = Integer.parseInt(AbasSeparada[0]);
        int Vezes = Integer.parseInt(AbasSeparada[1]);
        for(int i = 0; i < Vezes; i++){
            String pergunta = scanner.next();
            if(pergunta.equals("clicou")){
                AbasIni--;
            }else{
                AbasIni++;
            }
        }
        System.out.println(AbasIni);

    }
}
