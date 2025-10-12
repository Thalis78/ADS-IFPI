import type { Request, Response } from "express";
import type { Convite } from "../../type/index.ts";

import { jogadores } from "./jogadorController.ts";
import { partidas } from "./partidaController.ts";

let convites: Convite[] = [];
let idConvite = 1;

export const criarConvite = (req: Request, res: Response) => {
  try {
    const { jogadorId, partidaId } = req.body;

    const jogador = jogadores.find((j) => j.id === jogadorId);
    const partida = partidas.find((p) => p.id === partidaId);

    if (!jogador)
      return res.status(404).json({ mensagem: "Jogador não encontrado" });
    if (!partida)
      return res.status(404).json({ mensagem: "Partida não encontrada" });

    const novo: Convite = {
      id: idConvite++,
      jogadorId,
      partidaId,
      status: "pendente",
    };
    convites.push(novo);

    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao criar convite", erro: error });
  }
};

export const listarConvites = (req: Request, res: Response) => {
  try {
    res.json(convites);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao listar convites", erro: error });
  }
};

export const buscarConvite = (req: Request, res: Response) => {
  try {
    const convite = convites.find((c) => c.id === Number(req.params.id));
    if (!convite)
      return res.status(404).json({ mensagem: "Convite não encontrado" });

    res.json(convite);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar convite", erro: error });
  }
};

export const atualizarConvite = (req: Request, res: Response) => {
  try {
    const convite = convites.find((c) => c.id === Number(req.params.id));
    if (!convite)
      return res.status(404).json({ mensagem: "Convite não encontrado" });

    const { status } = req.body;
    const statusValidos: Convite["status"][] = [
      "pendente",
      "aceito",
      "recusado",
    ];

    if (!status || !statusValidos.includes(status)) {
      return res.status(400).json({ mensagem: "Status inválido" });
    }

    convite.status = status;
    res.json(convite);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao atualizar convite", erro: error });
  }
};

export const deletarConvite = (req: Request, res: Response) => {
  try {
    const index = convites.findIndex((c) => c.id === Number(req.params.id));
    if (index === -1)
      return res.status(404).json({ mensagem: "Convite não encontrado" });

    convites.splice(index, 1);
    res.json({ mensagem: "Convite removido com sucesso" });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao remover convite", erro: error });
  }
};
