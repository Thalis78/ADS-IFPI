
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import Exception.*;

class Cliente {
    private String nome;
    private String cpf;
    private String dataNascimento;

    public Cliente(String nome, String cpf, String dataNascimento) {
        if (!validarCPF(cpf)) {
            throw new AplicacaoError("CPF inválido.");
        }
        if (!validarDataNascimento(dataNascimento)) {
            throw new AplicacaoError("Data de nascimento inválida.");
        }
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    private boolean validarCPF(String cpf) {
        return Pattern.matches("\\d{11}", cpf);
    }

    private boolean validarDataNascimento(String data) {
        return Pattern.matches("\\d{2}/\\d{2}/\\d{4}", data);
    }

    public String getCpf() {
        return cpf;
    }
}