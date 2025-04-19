import java.util.Scanner;

public class OPERADORES {
    public static void  main(String[] args){
        /* OPERADORES ARITMETICOS:
            + SOMA;
            - SUBTRAÇÃO;
            * MULTIPLICAÇÃO;
            ** POTÊNCIA;
            % RESTO DA DIVISÃO;
            += ATRIBUIÇÃO DE SOMA;
            -= ATRIBUIÇÃO DE SUBTRAÇÃO;
            *= ATRIBUIÇÃO DE MULTIPLICAÇÃO;
            /= ATRIBUIÇÃO DE MULTIPLICAÇÃO;
            %= ATRIIBUIÇÃO DO RESTO DA DIVISÃO;
            ++ ICREMENTA + 1;
            -- DECREMENTA -1;

            OPERADOR TERNARIO:
            (EXPRESSÃO BOOLEANA) ? RESULTADO01 : RESULTADO02;

            OPERADORES LÓGICOS:
            || - OU
            && - E
            ! - NEGAÇÃO

            OPERADORES COMPARATIVOS:
            > MAIOR;
            < MENOR;
            >= MAIOR OU IGUAL;
            <= MENOR OU IGUAL;
            == IGUAL A;
            != DIFERENTE;

            OBS: OPERADORES LÓGICOS E COMPARATIVOS SÃO USADO PARA GERAR EXPRESSÕES BOOLEANAS.

        */

        /*EXERCICIO SIMPLES: SOME DUAS NOTAS E RETORNE SUA MÉDIA! */
        Scanner input = new Scanner(System.in);
        System.out.println("DIGITE SUA NOTA: ");
        double nota01 = input.nextDouble();
        System.out.println("DIGITE SUA SEGUNDA NOTA: ");
        double nota02 = input.nextDouble();
        double media = nota01 <= 10 && nota02 <= 10 ? (nota01 + nota02)/2 : 0;
        System.out.println(
                "--->PRIMEIRA NOTA: " + nota01
                +"\n--->SEGUNDA NOTA: " + nota02
                +"\n--->MEDIA:" + media
        );
    }
}
