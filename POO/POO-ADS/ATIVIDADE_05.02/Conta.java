public class Conta {
    private int id;
    private Cliente cliente;
    private String numero;
    private double saldo;

    public Conta(int id, String numero, double saldo) {
        this.id = id;
        this.numero = numero;
        this.saldo = saldo;
    }

    public int getId() {
        return id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        if (this.cliente == null) {
            this.cliente = cliente;
        } else {
            System.out.println("A conta já está associada a um cliente.");
        }
    }

    public String getNumero() {
        return numero;
    }

    public double getSaldo() {
        return saldo;
    }

    public void sacar(double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
        } else {
            System.out.println("Saldo insuficiente ou valor inválido.");
        }
    }

    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
        } else {
            System.out.println("Valor de depósito inválido.");
        }
    }

    public void transferir(double valor, Conta destino) {
        if (destino != null && valor > 0 && valor <= saldo) {
            this.sacar(valor);
            destino.depositar(valor);
        } else {
            System.out.println("Transferência inválida.");
        }
    }
}
