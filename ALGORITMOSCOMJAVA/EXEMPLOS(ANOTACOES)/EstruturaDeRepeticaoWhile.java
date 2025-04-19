import java.util.Scanner;

public class EstruturaDeRepeticaoWhile {
    public static void main(String[] args){
        /*
            ESTRUTURA DE REPETIÇÃO COM WHILE:
            O WHILE É UMA CONDICIONAL QUE VAI SER EXECUTADA DE MANEIRA RELATIVA ATÉ A EXPRESSÃO BOLEANA SER VERDADEIRA
            ELA É ALIMENTADA PELA EXPRESSÃO BOLEANA
            NELA SÓ VAI CONTER A CONDIÇÃO
            WHILE(EXPRESSÃO BOLEANA)

         */
        // EXERCICIO SIMPLES COM WHILE: PEÇA PRO USUARIO TENTAR ADIVINHAR A SENHA, A SENHA SERÁ 1234;

            System.out.println(EstruturaWhile());

    }
    public static String EstruturaWhile(){
        Scanner input = new Scanner(System.in);
        System.out.print("TENTE ADIVINHAR A SENHA\nSENHA: ");
        String senha = input.next();
        while (!"123".equals(senha)){
            System.out.print("TENTE NOVAMENTE: ");
            senha = input.next();
        }
        return "\nPARABÉNS VOCÊ ACERTOU A SENHA\nRESULTADO DA SENHA: "+ senha;
    }

}
