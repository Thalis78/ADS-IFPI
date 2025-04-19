
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class Cliente {
    int id;
    String nome;
    String cpf;
    LocalDate dataNascimento;
    List<Conta> contas;

    Cliente(int id, String nome, String cpf, LocalDate dataNascimento) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = new ArrayList<>();
    }

    String toStringCliente(){
        String contasCliente = contas.stream()
                .map(conta -> "- " + conta.numero + " (Saldo: " + conta.saldo + ")")
                .collect(Collectors.joining("\n"));
        return "Cliente: " + this.nome + "\nCPF:" + this.cpf +  "\nContas: " + contasCliente ;
    }
}
