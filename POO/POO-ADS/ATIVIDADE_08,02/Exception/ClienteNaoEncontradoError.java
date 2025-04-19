package Exception;

public class ClienteNaoEncontradoError extends AplicacaoError {
    public ClienteNaoEncontradoError() {
        super("Erro: Cliente não encontrado.");
    }
}