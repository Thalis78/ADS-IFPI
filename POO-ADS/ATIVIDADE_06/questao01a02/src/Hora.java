public class Hora {
    private int hora,minuto,segundo;

    public Hora(int hora, int minuto, int segundo) {
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }

    public void mostrarHora() {
        System.out.println(hora);
    }
    public void mostrarMinuto() {
        System.out.println(minuto);
    }
    public void mostrarSegundo() {
        System.out.println(segundo);
    }

    public void mostrarHoraFormatada() {
        System.out.printf("%d:%02d:%02d", hora, minuto, segundo);
    }

}
