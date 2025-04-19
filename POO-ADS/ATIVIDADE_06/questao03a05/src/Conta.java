public class Conta {
    private int id;
    private Cliente cliente;
    private String numero;
    private double saldo;

    public Conta(int id, Cliente cliente, String numero, double saldo) {
        this.id = id;
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;
    }
    public void sacar(double valor) {
        if (valor > 0 && saldo >= valor) {
            this.saldo -= valor;
            System.out.println("Saque realizado com sucesso!");
        } else {
            System.out.println("Saldo insuficiente ou valor inválido.");
        }
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public String getNumero() {
        return numero;
    }
    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public void depositar(double valor) {
        if (valor > 0) {
            this.saldo += valor;
            System.out.println("Deposito realizado com sucesso!");
        } else {
            System.out.println("Valor inválido para depósito.");
        }
    }


    public String toStringConta() {
        String nomeClient = cliente == null ? "nenhum" : cliente.getNome();
        return "Conta ID: " + id + ", Número: " + numero + ", Cliente: " + nomeClient + ", Saldo: R$" + saldo;
    }
}
