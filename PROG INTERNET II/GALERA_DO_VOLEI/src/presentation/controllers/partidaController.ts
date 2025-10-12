import type { Request, Response } from "express";
import type { Partida } from "../../type/index.ts";

export let partidas: Partida[] = [];
let idPartida = 1;

export const criarPartida = (req: Request, res: Response) => {
  try {
    const { data, hora, local, limiteJogadores } = req.body;

    if (!data || !hora || !local || !limiteJogadores) {
      return res
        .status(400)
        .json({ mensagem: "Todos os campos são obrigatórios" });
    }

    if (typeof limiteJogadores !== "number" || limiteJogadores <= 0) {
      return res.status(400).json({ mensagem: "Limite de jogadores inválido" });
    }

    const nova: Partida = {
      id: idPartida++,
      data,
      hora,
      local,
      limiteJogadores,
    };
    partidas.push(nova);

    res.status(201).json(nova);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao criar partida", erro: error });
  }
};

export const listarPartidas = (req: Request, res: Response) => {
  try {
    res.json(partidas);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao listar partidas", erro: error });
  }
};

export const buscarPartida = (req: Request, res: Response) => {
  try {
    const partida = partidas.find((p) => p.id === Number(req.params.id));
    if (!partida)
      return res.status(404).json({ mensagem: "Partida não encontrada" });

    res.json(partida);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar partida", erro: error });
  }
};

export const atualizarPartida = (req: Request, res: Response) => {
  try {
    const partida = partidas.find((p) => p.id === Number(req.params.id));
    if (!partida)
      return res.status(404).json({ mensagem: "Partida não encontrada" });

    const { data, hora, local, limiteJogadores } = req.body;

    if (
      limiteJogadores &&
      (typeof limiteJogadores !== "number" || limiteJogadores <= 0)
    ) {
      return res.status(400).json({ mensagem: "Limite de jogadores inválido" });
    }

    partida.data = data ?? partida.data;
    partida.hora = hora ?? partida.hora;
    partida.local = local ?? partida.local;
    partida.limiteJogadores = limiteJogadores ?? partida.limiteJogadores;

    res.json(partida);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao atualizar partida", erro: error });
  }
};

export const deletarPartida = (req: Request, res: Response) => {
  try {
    const index = partidas.findIndex((p) => p.id === Number(req.params.id));
    if (index === -1)
      return res.status(404).json({ mensagem: "Partida não encontrada" });

    partidas.splice(index, 1);
    res.json({ mensagem: "Partida removida com sucesso" });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao remover partida", erro: error });
  }
};
