import java.util.Scanner;

public class Estrutura_repeticao_for {
    /*
    ESTRUTURA DE REPETIÇÃO(LOOP);
    EXISTE DOIS TIPOS DE ESTRUTURA DE REPETIÇÃO - FOR E WHILE;
    NESSE CASO IREMOS FALAR DO FOR;
    O FOR ELE É USADO QUANDO EU TENHO UMA ESTRUTURA DE REPETIÇÃO QUE VAI TER UM NUMERO DE REPETIÇÃO DE MANEIRA ABSOLUTA, VOCÊ SABE QUANTAS VEZES AQUELA ESTRUTURA IRÁ SE RPETIR.
    ESTRUTURA DO FOR(VARIAVEL;EXPRESSÃO BOOLEAN;VARIAVEL(MUDANÇA DE VALOR))

    */
    /*EXERCICIO SIMPLES: MOSTRE A TABUADA DE UM A 10, A EXPRESSÃO VAI SER DESIGNADA PELO USUARIO*/

    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        System.out.println("ESCOLHA A EXPRESSÃO(+,-,/,*) PARA A TABUADA: ");
        String expressao = input.next();
        for(int tabuada = 1;tabuada <= 10; tabuada++){
            System.out.println("-------------TABUADA DO "+tabuada+" -----------------");
            for(int i = 1; i <= 10;i++){
                int resultado = "+".equals(expressao)? tabuada + i : "-".equals(expressao)? tabuada - i : "/".equals(expressao)? tabuada / i : "*".equals(expressao)? tabuada * i : 1;
                System.out.println(
                        "---> "+ tabuada + expressao + i + " = " + resultado
                );
        }
        }
}}
