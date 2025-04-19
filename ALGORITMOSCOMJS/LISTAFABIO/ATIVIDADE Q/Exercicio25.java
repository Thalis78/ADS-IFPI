import java.util.Scanner;

public class repeticao_for {
//    Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos.
//    Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:
//       · 1, 2, 3 = voto para os respectivos candidatos;
//       · 9 = voto nulo;
//       · 0 = voto em branco;
//    Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva:
//    a) total de votos para cada candidato;
//    b) total de votos nulos;
//    c) total de votos em branco;
//    d) quem venceu a eleição.
//
    public static void main(String[] args){
        Scanner voto = new Scanner(System.in);
        int presidenteA = 0;
        int presidenteB = 0;
        int presidenteC = 0;
        int nulo = 0;
        int branco = 0;
        int candidato = 0;
        for(int votos = 0; votos <= 3; votos++) {
            System.out.print("CANDIDATO " + (candidato++) + "\nVOTE 1,2,3 PARA PRESIDENTE\nVOTE 9 PARA NULO\nVOTE 0 PARA BRANCO\nVOTO: ");
            int resultado = voto.nextInt();
            if (resultado == 1) {
                presidenteA++;
            }
            if (resultado == 2) {
                presidenteB++;
            }
            if (resultado == 3) {
                presidenteC++;
            }
            if (resultado == 9) {
                nulo++;
            }
            if (resultado == 0) {
                branco++;
            }
        }
        int ab = Math.max(presidenteA,presidenteB);
        int abc = Math.max(ab,presidenteC);
        String presidente = "";
        if(abc == presidenteA){
            presidente = "PRESIDENTE A";
        }
        if(abc == presidenteB){
            presidente = "PRESIDENTE B";
        }
        if(abc == presidenteC){
            presidente = "PRESIDENTE C";
        }
        System.out.println(
                        "PRESIDENTE A: " + presidenteA
                        +"\nPRESIDENTE B:" + presidenteB
                        +"\nPRESIDENTE C:" + presidenteC
                        +"\nQUANTIDADE DE NULO: " +nulo
                        +"\nQUANTIDADE DE BRANCO:" + branco
                        +"\nQUEM VENCEU FOI: " + presidente);
    }

}

