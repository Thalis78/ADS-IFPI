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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public void sacar(double valor) {
        if (valor > 0 && saldo >= valor) {
            saldo -= valor;
        } else {
            System.out.println("Saldo insuficiente ou valor inválido.");
        }
    }

    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
        } else {
            System.out.println("Valor inválido para depósito.");
        }
    }
    public String toString() {
        return "Conta ID: " + id + ", Número: " + numero + ", Cliente: " + cliente.getNome() + ", Saldo: R$" + saldo;
    }
}
