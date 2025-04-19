package QUESTAO_04;

public class ContaPoupanca extends Conta {
    private double taxaJuros;

    public ContaPoupanca(int id, Cliente cliente, String numero, double saldo, double taxaJuros) {
        super(id, cliente, numero, saldo);
        this.taxaJuros = taxaJuros;
    }

    public void renderJuros() {
        double juros = saldo * taxaJuros;
        saldo += juros;
        System.out.println("Juros de R$" + juros + " aplicados. Novo saldo: R$" + saldo);
    }

    public double getTaxaJuros() {
        return taxaJuros;
    }

    @Override
    public String toStringConta() {
        return super.toStringConta() + ", Taxa de Juros: " + taxaJuros;
    }
}
