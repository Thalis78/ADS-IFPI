
class ContaPoupanca extends Conta {
    private double taxaJuros;

    public ContaPoupanca(String numero, Cliente cliente, double saldo, double taxaJuros) {
        super(numero, cliente, saldo);
        this.taxaJuros = taxaJuros;
    }

    public void renderJuros() {
        saldo += saldo * taxaJuros / 100;
    }
}