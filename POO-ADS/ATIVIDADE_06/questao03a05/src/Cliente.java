import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class Cliente {
    private int id;
    private String nome;
    private String cpf;
    private LocalDate dataNascimento;
    private List<Conta> contas;

    Cliente(int id, String nome, String cpf, LocalDate dataNascimento) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = new ArrayList<>();
    }


    String toStringCliente(){
        String contasCliente = contas.stream()
                .map(conta -> "- " + conta.getNumero() + " (Saldo: " + conta.getSaldo() + ")")
                .collect(Collectors.joining("\n"));
        return "Cliente: " + this.nome + "\nCPF:" + this.cpf +  "\nContas: " + contasCliente ;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public List<Conta> getContas() {
        return contas;
    }

    public void setContas(List<Conta> contas) {
        this.contas = contas;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}
