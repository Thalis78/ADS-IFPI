package Exception;

class PoupancaInvalidaError extends AplicacaoError {
    public PoupancaInvalidaError() {
        super("A conta informada não é uma conta poupança.");
    }
}
