import java.util.Scanner;


public class Funcao {
    public static void main(String[] args){
        /*
            A FUNÇÃO É USADA PARA SIMPLIFICAR O CODIGO, FAZER O REUSO DESSA FUNÇÕES E EVITAR A REDUNDÂNCIA;
            AS FUNÇÕES ELA PODEM  OU NÃO RETORNAR ALGUM VALOR, ALÉM DE PODER RECEBER PARÂMETROS E ESSES PARÂMETROS SÓ VÃO EXISTIR DENTRO DA FUNÇÃO.

            OBS: SE VOCÊ PASSA PARÂMETROS PARA A FUNÇÃO, SE QUANDO CHAMA-LA VOCÊ NÃO PASSAR ARGUMENTOS É PROVAVEL QUE O CODIGO NEM COMPILE E RETORNE UM ERRO.

            EXP:. INT NOME_FUNC(PARÂMETRO){
                RETURN PARÂMETRO
            }
            NOME_FUNC() ---> ERRO, NÃO TÁ RECEBENDO PARÂMETROS
            NOME_FUNC("THALISSON") ---> ERRO, TÁ RECEBENDO PARÂMETROS, PORÉM A INT ESTÁ ESPERANDO UM ARGUMENTO INTEIRO;
            NOME_FUNC(10) ---> CERTO.
        */
        /*
            QUESTÃO SIMPLES DE FUNÇÃO: CRIE UMA FUNÇÃO QUE VAI RETORNAR NOTAS A UMA VARIAVEL E APÓS ISSO CRIE UMA FUNÇÃO PRA CALCULAR A MEDIA
         */


        double nota01 = obterNotaDoUsuario();
        double nota02 = obterNotaDoUsuario();
        double media = obterMediaDoUsuario(nota01,nota02);
        System.out.println(
                "NOTA01 = "+ nota01
                +"\nNOTA02 = "+ nota02
                +"\nMEDIA = "+ media
        );

    }
    public static double obterNotaDoUsuario() {
        Scanner input = new Scanner(System.in);
        System.out.print("INFORME NOTA: ");
        double nota = input.nextDouble();
        return nota;
    }
    public static double obterMediaDoUsuario(double nota01, double nota02){
        double media = (nota01 + nota02)/2;
        return media;
    }
}
