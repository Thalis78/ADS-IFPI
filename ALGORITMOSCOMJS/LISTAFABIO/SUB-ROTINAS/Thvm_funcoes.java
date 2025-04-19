public class Thvm_funcoes {
    public static double Velocidade(double Vms){
        return Vms * 3.6;
    }
    public static double minutos(double horas, int min){
        return (horas * 60) + min;
    }
    public static double Real(double dolar){
        return dolar * 5.15;
    }
    public static double VelocidaKm(double Vkm){
        return Vkm/3.6;
    }
    public static double AreaTriangulo(double base, double altura){
        return (base * altura)/2;
    }
    public static double AreaQuadrado(double lado){
        return lado * lado;
    }
    public static double AreaRetangulo(double base, double altura){
        return base * altura;
    }
    public static double ComprimentoCircuferencia(double raio){
        return 2 * 3.14 * raio;
    }
    public static double VolumeEsfera(double raio){
        return (4 * 3.14 * (raio*raio*raio))/3;
    }
    public static double TemperaturaF(double Celsius){
        return (9 * Celsius + 160)/5;
    }
    public static double TemperaturaC(double Fahren){
        return (5 * Fahren - 160)/ 9;
    }
    public static String Fatorial(int Num){
        int fatorial = 1;
        String Sequencia = "";
        for (int i = 0;i < Num; i++){
            fatorial *= Num - i;
            if(i == Num -1){
                Sequencia += Num - i;
            }else{
                Sequencia += Num - i+" X ";
            }
        }
        return Sequencia +" = " + fatorial;
    }
    public static String NumPrimo(int Num){
        return (Num > 10 && Num % 2 != 0 && Num % 3 != 0 && Num % 5 != 0) || (Num == 2 || Num == 3 || Num == 5 || Num == 7) ? "PRIMO" : "NÃO PRIMO";
    }
    public static String DataValida(int ano, int mes, int dia){
        int[] Ano = {31,28,31,30,31,30,31,31,30,31,30,31};
        int[] AnoBissexto =  {31,29,31,30,31,30,31,31,30,31,30,31};
        return ano%4 == 0 ? AnoBissexto[mes-1] >= dia ? "DATA VALIDA" : "DATA INVALIDA" : Ano[mes -1] >= dia ? "DATA VALIDA" : "DATA INVALIDA";
    }
    public static int MMC(int Num01, int Num02){
        int Inicial = 2;
        int mmc = 1;

        while (Num01 != 1 || Num02 != 1){
            if(Num01%Inicial == 0 && Num02%Inicial == 0){
                Num01 = Num01/Inicial;
                Num02 = Num02/Inicial;
                mmc *= Inicial;
            }else if(Num01%Inicial == 0 && Num02%Inicial !=0){
                Num01 = Num01/Inicial;
                mmc *= Inicial;
            }else if(Num01%Inicial != 0 && Num02%Inicial == 0){
                Num02 = Num02/Inicial;
                mmc *= Inicial;

            }else {
                Inicial++;
            }
        }
        return mmc;

    }
    public static int MDC(int Num01, int Num02){
        int MaiorDivisorComum = 0;
        int MenorNum = Math.min(Num01,Num02);
        for(int i = 1;i <= MenorNum ;i++){
            if(Num01 % i == 0 && Num02 % i == 0){
                MaiorDivisorComum = i;
            }
        }
        return MaiorDivisorComum;
    }
    public static String Anobissexto(int ano){
        return ano%4 == 0 ?"ANO BISSEXTO" : "NÃO É UM ANO BISSEXTO";
    }
    public static void LinhaVertical(int QuantidadeLinha){
        System.out.println("---------------------LINHA VERTICAL-------------------------");
        for(int i = 0; i < QuantidadeLinha;i++){
            System.out.println("                            |                                 ");
        }
    }
    public static void LinhaHorizontal(int QuantidadeLinha){
        System.out.println("LINHA HORIZONTAL: ");
        for(int i = 0; i < QuantidadeLinha; i++){
            System.out.print("-");
        }
    }
    public static void MolduraTela(int LinhaHorizontal, int LinhaVertical){
        System.out.println("MOLDURA: ");
        String Espaçamento = "";
        for(int i = 0; i< LinhaHorizontal;i++){
            if(i == LinhaHorizontal -1){
                System.out.println("_");
            }else{
                System.out.print("_");
            }
            if(i < LinhaHorizontal-2){
                Espaçamento += " ";
            }
        }
        for(int a = 0; a < LinhaVertical;a++){
            System.out.println("|"+Espaçamento+"|");
        }
        for(int i = 0; i< LinhaHorizontal;i++){
            if(i == LinhaHorizontal -1){
                System.out.println("_");
            }else{
                System.out.print("_");
            }
    }
}}
