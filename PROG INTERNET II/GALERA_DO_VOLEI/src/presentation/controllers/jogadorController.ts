import type { Request, Response } from "express";
import type { Jogador } from "../../type/index.ts";

export let jogadores: Jogador[] = [];
let idJogador = 1;

const posicoesValidas = [
  "levantador",
  "ponteiro",
  "central",
  "oposto",
  "líbero",
];

export const criarJogador = (req: Request, res: Response) => {
  try {
    const { nome, telefone, posicao } = req.body;

    if (!nome || !telefone) {
      return res
        .status(400)
        .json({ mensagem: "Nome e telefone são obrigatórios" });
    }

    if (posicao && !posicoesValidas.includes(posicao)) {
      return res.status(400).json({ mensagem: "Posição inválida" });
    }

    const novo: Jogador = { id: idJogador++, nome, telefone, posicao };
    jogadores.push(novo);

    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao criar jogador", erro: error });
  }
};

export const listarJogadores = (req: Request, res: Response) => {
  try {
    res.json(jogadores);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao listar jogadores", erro: error });
  }
};

export const buscarJogador = (req: Request, res: Response) => {
  try {
    const jogador = jogadores.find((j) => j.id === Number(req.params.id));
    if (!jogador)
      return res.status(404).json({ mensagem: "Jogador não encontrado" });

    res.json(jogador);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar jogador", erro: error });
  }
};

export const atualizarJogador = (req: Request, res: Response) => {
  try {
    const jogador = jogadores.find((j) => j.id === Number(req.params.id));
    if (!jogador)
      return res.status(404).json({ mensagem: "Jogador não encontrado" });

    const { nome, telefone, posicao } = req.body;

    if (posicao && !posicoesValidas.includes(posicao)) {
      return res.status(400).json({ mensagem: "Posição inválida" });
    }

    jogador.nome = nome ?? jogador.nome;
    jogador.telefone = telefone ?? jogador.telefone;
    if (posicao) jogador.posicao = posicao;

    res.json(jogador);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao atualizar jogador", erro: error });
  }
};

export const deletarJogador = (req: Request, res: Response) => {
  try {
    const index = jogadores.findIndex((j) => j.id === Number(req.params.id));
    if (index === -1)
      return res.status(404).json({ mensagem: "Jogador não encontrado" });

    jogadores.splice(index, 1);
    res.json({ mensagem: "Jogador removido com sucesso" });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao remover jogador", erro: error });
  }
};
