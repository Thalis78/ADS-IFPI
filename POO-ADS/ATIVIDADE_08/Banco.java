
import java.io.*;
import java.util.ArrayList;
import java.util.List;

class Banco {
    List<Conta> contas = new ArrayList<>();
    List<Cliente> clientes = new ArrayList<>();
    int idContas = 1;  // Variável para gerar IDs automaticamente para as contas

    void inserirConta(Conta conta) {
        contas.add(conta);
        System.out.println("Conta inserida com sucesso!");
    }

    void inserirCliente(Cliente cliente) {
        clientes.add(cliente);
        System.out.println("Cliente inserido com sucesso!");
    }

    Conta consultarConta(String numero) {
        for (Conta conta : contas) {
            if (conta.numero.equals(numero)) {
                return conta;
            }
        }
        return null;
    }

    Cliente consultarClientePorCPF(String CPF) {
        for (Cliente cliente : clientes) {
            if (cliente.cpf.equals(CPF)) {
                return cliente;
            }
        }
        return null;
    }

    void renderJuros(String numero) {
        Conta conta = consultarConta(numero);
        if (conta == null) {
            System.out.println("Conta não encontrada.");
            return;
        }

        if (conta instanceof ContaPoupanca) {
            ContaPoupanca poupanca = (ContaPoupanca) conta;
            poupanca.renderJuros();
            System.out.println("Juros renderizados com sucesso!");
        } else {
            System.out.println("A conta informada não é uma poupança.");
        }
    }

    void excluirConta(String numero) {
        Conta conta = consultarConta(numero);
        if (conta != null) {
            contas.remove(conta);
            System.out.println("Conta excluída com sucesso!");
        } else {
            System.out.println("Conta não encontrada.");
        }
    }

    void excluirCliente(String cpf) {
        Cliente cliente = consultarClientePorCPF(cpf);
        if (cliente != null) {
            contas.removeIf(conta -> conta.cliente != null && conta.cliente.cpf.equals(cpf));
            clientes.remove(cliente);
            System.out.println("Cliente e suas contas associadas foram excluídos com sucesso!");
        } else {
            System.out.println("Cliente não encontrado.");
        }
    }

    void carregarContasDoArquivo(String caminhoArquivo) {
        try (BufferedReader br = new BufferedReader(new FileReader(caminhoArquivo))) {
            String linha;
            while ((linha = br.readLine()) != null) {
                String[] dados = linha.split(";");
                String numero = dados[0].trim();
                double saldo = Double.parseDouble(dados[1].trim());
                String tipoConta = dados[2].trim();
                String cpfCliente = dados.length > 3 ? dados[3].trim() : "";

                Cliente cliente = consultarClientePorCPF(cpfCliente);

                if (cliente == null) {
                    System.out.println("Cliente com CPF " + cpfCliente + " não encontrado. Conta não carregada.");
                    continue;
                }

                if (tipoConta.equals("C")) {
                    contas.add(new Conta(idContas++, cliente, numero, saldo));
                } else if (tipoConta.equals("CP")) {
                    double taxaJuros = Double.parseDouble(dados[3].trim());
                    contas.add(new ContaPoupanca(idContas++, cliente, numero, saldo, taxaJuros));
                } else if (tipoConta.equals("CI")) {
                    double taxaDesconto = Double.parseDouble(dados[3].trim());
                    contas.add(new ContaImposto(idContas++, cliente, numero, saldo, taxaDesconto));
                }
            }
            System.out.println("Contas carregadas com sucesso!");
        } catch (Exception e) {
            System.out.println("Erro ao carregar o arquivo: " + e.getMessage());
        }
    }

    void salvarContasNoArquivo(String caminhoArquivo) {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(caminhoArquivo))) {
            for (Conta conta : contas) {
                if (conta instanceof ContaPoupanca) {
                    ContaPoupanca cp = (ContaPoupanca) conta;
                    bw.write(String.format("%s; %.2f; CP; %.2f\n", cp.numero, cp.saldo, cp.getTaxaJuros()));
                } else if (conta instanceof ContaImposto) {
                    ContaImposto ci = (ContaImposto) conta;
                    bw.write(String.format("%s; %.2f; CI; %.2f\n", ci.numero, ci.saldo, ci.getTaxaImposto()));
                } else {
                    bw.write(String.format("%s; %.2f; C\n", conta.numero, conta.saldo));
                }
            }
            System.out.println("Contas salvas com sucesso!");
        } catch (IOException e) {
            System.out.println("Erro ao salvar o arquivo: " + e.getMessage());
        }
    }
}
