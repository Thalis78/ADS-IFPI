package Questão09;

public class SituacaoFinanceira {
    double valor_creditos;
    double valor_debitos;

    double calcular_saldo(){
        return this.valor_creditos - this.valor_debitos;
    }
}
