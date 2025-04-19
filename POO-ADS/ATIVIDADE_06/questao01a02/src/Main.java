public class Main {
    public static void main(String[] args) {
        Calculadora calculadora = new Calculadora(10,20);
        calculadora.soma();
        calculadora.subtrair();


        Hora hora = new Hora(07,52,00);

        hora.mostrarHora();
        hora.mostrarMinuto();
        hora.mostrarSegundo();
        hora.mostrarHoraFormatada();
    }
}