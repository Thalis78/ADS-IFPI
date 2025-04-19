import java.util.Scanner;

public class Condicionais {
    public static void main(String[] args){
        /*
            CONDICONAIS{
                NAS CONDICONAIS PODEMOS USAR A RECURSÃO(TERNARIO) PRA FAZER CONDIÇÕES SIMPLES;
                PODEMOS USAR O IF(SE),ELSE IF(SENAO SE),ELSE(SENAO) PARA CRIAR CONDIÇÕES E ATÉ FAZER ANINHAMENTOS A DEPENDER DO OBJETIVO;
                ANINHAMENTO SERIA ANINHAR VÁRIAS CONDIÇÕES DIANTE UMA CONDIÇÃO PRÉ DEFINIDA CAUSANDO OUTRAS POSSIBILIDADES DE RESULTADOS;
                E PODEMOS UTILIZAR OS SWITCH PARA CRIAR CASOS A DEPENDER DO PROGRAMA;

                TODAS AS CONDICIONAIS PRECISAM SER ALIMENTADAS COM EXPRESSÕES BOOLEANAS, CASO SEJA VERDADE ELA ENTRA NA CONDIÇÃO, CASO NÃO SEJA VERDADE, ELA ENTRA EM OUTRA CONDIÇÃO;
                ELSE E O DEFAULT(SWITCH) SÃO SEMELHANTES: AMBOS TEM A IDÉIA DE RETORNAR ALGO CASO NENHUMAS DAS CONDIÇÕES SEJA SELECIONADA;

            }
        */
        /*EXERCICIO SIMPLES DE CONDICIONAL: PERGUNTE A IDADE DO USUARIO, E SE FOR MAIOR OU IGUAL A 18, DIGA QUE PODE ENTRAR, CASO ELE TENHA UMA IDADE MENOR QUE 18 , POREM IGUAL A 17, PERGUNTE EM QUANTOS MESES ELE FAZ ANIVERSARIO
          CASO MESES FOR MENOR OU IGUAL A 6, DIGA QUE PODE ENTRAR, CASO SEJA MAIOR DIGA QUE NÃO PODE ENTRAR, CASO ELE NÃO ENTRE EM NENHUMA DESSAS CONDIÇÕES, DIGA DIRETAMENTE QUE ELE NÃO TEM A IDADE PERMITIDA; */
        Scanner input = new Scanner(System.in);
        System.out.println("QUAL É SUA IDADE: ");
        int idade = input.nextInt();
        if(idade > 18){
            System.out.println("VOCÊ TEM A IDADE PERMITIDA");
        }
        else if (idade == 17){
            System.out.println("FALTA QUANTOS MESES PRA VOCÊ COMPLETAR 18? ");
            int permissao = input.nextInt();
            if(permissao <= 6){
                System.out.println("VOCÊ TEM A IDADE PERMITIDA");
            }
            else{
                System.out.println("VOCÊ NÃO TEM A IDADE PERMITIDA");
            }
        }
        else{
            System.out.println("VOCÊ NÃO TEM A IDADE PERMITIDA");
        }

    }
}
