import java.util.Scanner;

public class J1131 {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        int grenais = 0;
        int Inter = 0;
        int Gremio = 0;
        int GanhaInter = 0;
        int GanhaGre = 0;
        int empate = 0;
        while (true){
            System.out.println("Novo grenal (1-sim 2-nao)");
            int opcao;
            do {
                opcao = input.nextInt();
                if (opcao != 1 && opcao != 2) {
                    System.out.println("Novo grenal (1-sim 2-nao)");
                }
            } while (opcao != 1 && opcao != 2);
            if(opcao == 1){
                grenais++;
                Inter = input.nextInt();
                Gremio = input.nextInt();
                if(Inter > Gremio){
                    GanhaInter+=1;
                }if(Gremio > Inter){
                    GanhaGre+=1;
                }if(Gremio == Inter){
                    empate+=1;
                }
            }else{
                System.out.println(grenais+" grenais");
                System.out.println("Inter:"+GanhaInter);
                System.out.println("Gremio:"+GanhaGre);
                System.out.println("Empates:"+empate);
                System.out.println(GanhaInter > GanhaGre ? "Inter venceu mais" : GanhaGre > GanhaInter ? "Gremio venceu mais": "Empate");
            }
        }


    }
}
