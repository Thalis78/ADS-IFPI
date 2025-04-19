package QUESTAO_03;

public class CalculadoraCientifica extends Calculadora{
    public CalculadoraCientifica(int num1, int num2) {
        super(num1, num2);
    }

    public int exponenciar(int num1, int num2){
        int aux = num1;
        for(int i = 0; i < num2;i++){
            System.out.printf("%d * %d = %d\n", num1, aux, num1*aux);
            num1 *= aux;
        }
        return num1;
    }
}
