import java.lang.reflect.Array;
import java.util.Scanner;

public class JogadaComputador {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int[][] combinacoesJogoDaVelha = {{1,2,3},{4,5,6},{7,8,9},{1,4,7},{2,5,8},{3,6,9},{1,5,9},{3,5,7}};
        int jogada = scanner.nextInt();
        int[] JogadaPlayer = new int[5];
        int[] JogadaComputador = new int[4];
        int[][] combinacoesPlayer = null;
        for(int i = 0; i < 5;i++){
            System.out.printf("JOGADA DO PLAYER: %d%n",jogada);
            if(i ==0){
                combinacoesPlayer = combinacoesPlayer(jogada,combinacoesJogoDaVelha);
                JogadaComputador[i] = primeiraJogadaComputador(jogada);
                System.out.printf("JOGADA DO COMPUTADOR: %d%n",JogadaComputador[i]);
            }else{
                JogadaComputador[i] = DefesaComputador(combinacoesPlayer,jogada);
                System.out.printf("JOGADA DO COMPUTADOR: %d%n",JogadaComputador[i]);
            }
            jogada = scanner.nextInt();
        }
    }
    public static int[][] combinacoesPlayer(int jogada,int[][]combinacoesJogo){
        int[][] array = new int[5][3];
        int count = 0;
        for(int i = 0; i < combinacoesJogo.length;i++){
            for(int a = 0;a < 3;a++){
                if(jogada == combinacoesJogo[i][a]){
                    array[count][0] = combinacoesJogo[i][0];
                    array[count][1] = combinacoesJogo[i][1];
                    array[count][2] = combinacoesJogo[i][2];
                    System.out.printf("%d combinação: %d%d%d%n",count+1,array[count][0],array[count][1],array[count][2]);
                    count++;

                }
            }
        }
        return array;

    }
    public static int primeiraJogadaComputador(int Jogada){
        return Jogada == 5 ? 1 : 5;
    }
    public static int DefesaComputador(int[][] combinacoesPlayer, int jogadaPlayer) {
        for (int i = 0; i < combinacoesPlayer.length; i++) {
            for (int a = 0; a < 3; a++) {
                if (jogadaPlayer == combinacoesPlayer[i][a]) {
                    if (jogadaPlayer == combinacoesPlayer[i][0] || jogadaPlayer == combinacoesPlayer[i][1]) {
                        return combinacoesPlayer[i][2];
                    } else if (jogadaPlayer == combinacoesPlayer[i][0] || jogadaPlayer == combinacoesPlayer[i][2]) {
                        return combinacoesPlayer[i][1];
                    } else {
                        return combinacoesPlayer[i][0];
                    }

                }
            }
        }
        return (int) Math.random() * 10;
    }

}
