
import Exception.*;

abstract class Conta {
    protected String numero;
    protected double saldo;
    protected Cliente cliente;

    public Conta(String numero, Cliente cliente, double saldo) {
        this.numero = numero;
        this.cliente = cliente;
        depositar(saldo);
    }

    public void atualizarDados(String novoNumero, Cliente novoCliente) {
        this.numero = novoNumero;
        this.cliente = novoCliente;
    }

    public void depositar(double valor) {
        validarValor(valor);
        saldo += valor;
    }

    public void sacar(double valor) {
        validarValor(valor);
        if (saldo < valor) {
            throw new SaldoInsuficienteError();
        }
        saldo -= valor;
    }

    public void transferir(Conta destino, double valor) {
        sacar(valor);
        destino.depositar(valor);
    }

    protected void validarValor(double valor) {
        if (valor <= 0) {
            System.out.println("Valor invalido");
        }
    }

    public String getNumero() {
        return numero;
    }
}