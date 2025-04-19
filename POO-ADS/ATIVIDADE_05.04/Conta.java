public class Conta {
    int id;
    Cliente cliente;
    String numero;
    double saldo;

    Conta(int id, Cliente cliente, String numero, double saldo) {
        this.id = id;
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;
    }
    void sacar(double valor) {
        if (valor > 0 && saldo >= valor) {
            this.saldo -= valor;
            System.out.println("Saque realizado com sucesso!");
        } else {
            System.out.println("Saldo insuficiente ou valor inválido.");
        }
    }

    void depositar(double valor) {
        if (valor > 0) {
            this.saldo += valor;
            System.out.println("Deposito realizado com sucesso!");
        } else {
            System.out.println("Valor inválido para depósito.");
        }
    }


    String toStringConta() {
        String nomeClient = cliente == null ? "nenhum" : cliente.nome;
        return "Conta ID: " + id + ", Número: " + numero + ", Cliente: " + nomeClient + ", Saldo: R$" + saldo;
    }
}
