
public class ContaImposto extends Conta {
    private double taxaImposto;

    public ContaImposto(int id, Cliente cliente, String numero, double saldo, double taxaImposto) {
        super(id, cliente, numero, saldo);
        this.taxaImposto = taxaImposto;
    }

    public void aplicarImposto() {
        double imposto = saldo * taxaImposto;
        saldo -= imposto;
        System.out.println("Imposto aplicado: R$" + imposto);
    }

    @Override
    String toStringConta() {
        return super.toStringConta() + ", Taxa de Imposto: " + taxaImposto;
    }

    public double getTaxaImposto() {
        return taxaImposto;
    }

    public void setTaxaImposto(double taxaImposto) {
        this.taxaImposto = taxaImposto;
    }
}
