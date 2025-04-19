class ContaImposto extends Conta {
    private double taxaImposto;

    public ContaImposto(String numero, Cliente cliente, double saldo, double taxaImposto) {
        super(numero, cliente, saldo);
        this.taxaImposto = taxaImposto;
    }
}
