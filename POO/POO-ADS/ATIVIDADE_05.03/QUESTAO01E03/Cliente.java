import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Cliente {
    private int id;
    private String nome;
    private String cpf;
    private Date dataNascimento;
    private List<Conta> contas;

    public Cliente(int id, String nome, String cpf, Date dataNascimento) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getCpf() {
        return cpf;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public List<Conta> getContas() {
        return contas;
    }

    public void adicionarConta(Conta conta) {
        if (!contas.contains(conta)) {
            contas.add(conta);
        } else {
            System.out.println("Conta já está associada a este cliente.");
        }
    }
}
