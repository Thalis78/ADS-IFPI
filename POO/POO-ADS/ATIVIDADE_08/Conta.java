
public class Conta {
    int id;
    Cliente cliente;
    String numero;
    double saldo;

    Conta(int id, Cliente cliente, String numero, double saldo) throws Exception{
        this.id = id;
        this.cliente = cliente;
        this.numero = numero;
        validaValor(saldo);
        this.saldo = saldo;
    }
    public void sacar(double valor) throws Exception{
        validaValor(valor);
        if (valor > 0 && saldo >= valor) {
            this.saldo -= valor;
            System.out.println("Saque realizado com sucesso!");
        } else {
            System.out.println("Saldo insuficiente ou valor inválido.");
        }
    }

    public void depositar(double valor) throws Exception{
        validaValor(valor);
        if (valor > 0) {
            this.saldo += valor;
            System.out.println("Deposito realizado com sucesso!");
        } else {
            System.out.println("Valor inválido para depósito.");
        }
    }


    public String toStringConta() {
        String nomeClient = cliente == null ? "nenhum" : cliente.nome;
        return "Conta ID: " + id + ", Número: " + numero + ", Cliente: " + nomeClient + ", Saldo: R$" + saldo;
    }

    public void validaValor(double valor) throws Exception {
        if (valor <= 0) {
            throw new Exception("O valor deve ser maior que zero.");
        }
    }
}
