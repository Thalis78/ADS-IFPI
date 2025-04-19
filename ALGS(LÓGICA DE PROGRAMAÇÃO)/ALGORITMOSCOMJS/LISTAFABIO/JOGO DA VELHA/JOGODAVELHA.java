import java.util.Random;
import java.util.Scanner;

public class JOGODAVELHA {
    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws InterruptedException {
        String[] Array = new String[9];
        int[][] combinacoesJogoDaVelha = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}, {1, 4, 7}, {2, 5, 8}, {3, 6, 9}, {1, 5, 9}, {3, 5, 7}};
        combinacoesComputador(combinacoesJogoDaVelha);
        Array = comporJogo(Array);
        JogoDaVelha(Array, combinacoesJogoDaVelha);
    }

    public static void JogoDaVelha(String[] Array, int[][] combinacoesJogoDaVelha) throws InterruptedException {
        int resultadoMenuPrincipal = menuPrincipal();
        switch (resultadoMenuPrincipal) {
            case 1:
                String tipo = escolhaJogo();
                int comecopartida = menuJogo();

                break;
            case 2:
                String tipoEscolha = escolhaJogo();
                playerVsPlayer(Array, combinacoesJogoDaVelha, tipoEscolha);
                break;
            case 3:
                System.out.println("VOCÊ SAIU DO JOGO!!!");
                break;
        }
    }

    public static int menuPrincipal() {
        System.out.println("MENU PRINCIPAL:\n1 - JOGAR CONTRA O COMPUTADOR\n2 - PLAYER VS PLAYER\n3 - SAIR\nESCOLHA:");
        return scanner.nextInt();
    }

    public static int menuJogo() {
        System.out.println("MENU JOGO:\n1 - COMPUTADOR COMEÇA\n2 - VOCÊ COMEÇA A PARTIDA\n3 - VOLTAR PARA MENU PRINCIPAL");
        return scanner.nextInt();
    }

    public static String escolhaJogo() {
        System.out.println("VOCÊ DESEJA JOGAR COM 'O' OU 'X':");
        return scanner.next().toUpperCase();
    }

    public static String[] comporJogo(String[] Array) {
        for (int i = 1; i <= 9; i++) {
            Array[i - 1] = "" + i;
        }
        return Array;
    }

    public static void baseJogo(String[] Array) {
        System.out.printf(
                " %S | %S | %S\n" +
                        "------------\n" +
                        " %S | %S | %S\n" +
                        "------------\n" +
                        " %S | %S | %S\n", Array[0], Array[1], Array[2], Array[3], Array[4], Array[5], Array[6], Array[7], Array[8]
        );
    }

    public static void playerVsPlayer(String[] Array, int[][] combinacoesJogoDaVelha, String escolhaJogador) throws InterruptedException {
        int[] escolhaJogador1 = new int[5];
        int[] escolhaJogador2 = new int[4];
        int count = 1;
        int i = 0;
        baseJogo(Array);
        while (true) {
            if (i <= 4) {
                System.out.printf("JOGADA %d:", count);
                String Jogada = scanner.next();
                escolhaJogador1[i] = Integer.parseInt(Jogada);
                PreencherJogadas(Array, Jogada, count, escolhaJogador);
            }
            if (VerificarVencedor(combinacoesJogoDaVelha, escolhaJogador1)) {
                System.out.println("JOGADOR 1 É O VENCEDOR!!");
                break;
            }
            count++;
            if (i < 4) {
                System.out.printf("JOGADA %d:", count);
                String Jogada = scanner.next();
                escolhaJogador2[i] = Integer.parseInt(Jogada);
                PreencherJogadas(Array, Jogada, count, escolhaJogador);

            } else {
                System.out.println("JOGO DA VELHA!!");
                break;
            }
            if (VerificarVencedor(combinacoesJogoDaVelha, escolhaJogador2)) {
                System.out.println("JOGADOR 2 É O VENCEDOR!!");
                break;
            }
            i++;
            count++;
        }
    }

    public static String[] verificarJogadas(String[] Array, String jogadaInformada, int numeroJogada) {
        for (int i = 0; i < Array.length; i++) {
            if (Array[i].equals(jogadaInformada)) {
                Array[i] = "0";
                return Array;
            }
            if (i == Array.length - 1) {
                System.out.println("SINTO MUITO, ESSA JOGADA JÁ FOI ESCOLHIDA!!!");
                System.out.printf("%d JOGADA:", numeroJogada);
                verificarJogadas(Array, scanner.next(), numeroJogada);
            }
        }
        return Array;
    }

    public static void PreencherJogadas(String[] Array, String jogadaInformada, int numeroJogada, String tipoEscolha) throws InterruptedException {
        Array = verificarJogadas(Array, jogadaInformada, numeroJogada);
        String[] SegundoArray = Array;
        for (int i = 0; i < Array.length; i++) {
            if (Array[i].equals("0")) {
                if (numeroJogada % 2 == 0) {
                    SegundoArray[i] = tipoEscolha.equals("X") ? "O" : "X";
                    Thread.sleep(500);
                    baseJogo(SegundoArray);
                } else {
                    SegundoArray[i] = tipoEscolha;
                    Thread.sleep(500);
                    baseJogo(SegundoArray);
                }
            }
        }
    }

    public static boolean VerificarVencedor(int[][] combinacoesJogoDaVelha, int[] combinacoes) {
        for (int i = 0; i < combinacoesJogoDaVelha.length; i++) {
            int count = 0;
            for (int a = 0; a < 3; a++) {
                for (int e = 0; e < combinacoes.length; e++) {
                    if (combinacoes[e] == combinacoesJogoDaVelha[i][a]) {
                        count++;
                        break;
                    }
                }
            }
            if (count == 3) {
                return true;
            }
        }
        return false;
    }
    public static void playerVsComputador(int comecopartida){
        switch (comecopartida){
            case 1:

        }
    }
    public static int[][] combinacoesComputador(int[][] combinacoesJogo){
        int[][] Array = new int[5][5];
        int Jogada = scanner.nextInt();
        int i = 0;
        for(int a = 0; a  < combinacoesJogo.length;a++){
            for(int e = 0; e < 3;e++){
                if(Jogada == combinacoesJogo[a][e]){
                    Array[i][0] = combinacoesJogo[a][0];
                    Array[i][1] = combinacoesJogo[a][1];
                    Array[i][2] = combinacoesJogo[a][2];
                    i++;
                }
            }
        }
        return Array;
    }
      public static int primeiraJogadaComputador(int Jogada){
        if(Jogada !=5 || Jogada == 0){
            return 5;
        }else{
            return 3;
        }
    }
      public static int segundaJogadaComputador(int Jogada,int[][] combinacoesJogador){
        int count = 0;
        while (true){
            for(int i = 0; i < 3;i++){
                if(combinacoesJogador[count][i] == Jogada){
                    for (int)
                    break;
                }
            }
        }
      }
}
