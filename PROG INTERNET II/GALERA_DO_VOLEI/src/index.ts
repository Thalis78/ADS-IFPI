import express from "express";
import type { Request, Response } from "express";
import cors from "cors";

export type Jogador = {
  id: number;
  nome: string;
  telefone: string;
  posicao?: "levantador" | "ponteiro" | "central" | "oposto" | "líbero";
};

export type Partida = {
  id: number;
  data: string;
  hora: string;
  local: string;
  limiteJogadores: number;
};

export type Convite = {
  id: number;
  jogadorId: number;
  partidaId: number;
  status: "pendente" | "aceito" | "recusado";
};

const app = express();
app.use(cors());
app.use(express.json());

let jogadores: Jogador[] = [];
let partidas: Partida[] = [];
let convites: Convite[] = [];

let idJogador = 1;
let idPartida = 1;
let idConvite = 1;

app.post("/jogadores", (req: Request, res: Response) => {
  try {
    const { nome, telefone, posicao } = req.body;

    if (!nome || !telefone) {
      return res
        .status(400)
        .json({ mensagem: "Nome e telefone são obrigatórios" });
    }

    const posicoesValidas = [
      "levantador",
      "ponteiro",
      "central",
      "oposto",
      "líbero",
    ];
    if (posicao && !posicoesValidas.includes(posicao)) {
      return res.status(400).json({ mensagem: "Posição inválida" });
    }

    const novo: Jogador = { id: idJogador++, nome, telefone, posicao };
    jogadores.push(novo);

    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao criar jogador", erro: error });
  }
});

app.get("/jogadores", (req: Request, res: Response) => {
  try {
    res.json(jogadores);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao listar jogadores", erro: error });
  }
});

app.get("/jogadores/:id", (req: Request, res: Response) => {
  try {
    const jogador = jogadores.find((j) => j.id === Number(req.params.id));
    if (!jogador)
      return res.status(404).json({ mensagem: "Jogador não encontrado" });

    res.json(jogador);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar jogador", erro: error });
  }
});

app.put("/jogadores/:id", (req: Request, res: Response) => {
  try {
    const jogador = jogadores.find((j) => j.id === Number(req.params.id));
    if (!jogador)
      return res.status(404).json({ mensagem: "Jogador não encontrado" });

    const { nome, telefone, posicao } = req.body;

    if (posicao) {
      const posicoesValidas = [
        "levantador",
        "ponteiro",
        "central",
        "oposto",
        "líbero",
      ];
      if (!posicoesValidas.includes(posicao)) {
        return res.status(400).json({ mensagem: "Posição inválida" });
      }
      jogador.posicao = posicao;
    }

    jogador.nome = nome ?? jogador.nome;
    jogador.telefone = telefone ?? jogador.telefone;

    res.json(jogador);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao atualizar jogador", erro: error });
  }
});

app.delete("/jogadores/:id", (req: Request, res: Response) => {
  try {
    const index = jogadores.findIndex((j) => j.id === Number(req.params.id));
    if (index === -1)
      return res.status(404).json({ mensagem: "Jogador não encontrado" });

    jogadores.splice(index, 1);
    res.json({ mensagem: "Jogador removido com sucesso" });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao remover jogador", erro: error });
  }
});

app.post("/partidas", (req: Request, res: Response) => {
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
});

app.get("/partidas", (req: Request, res: Response) => {
  try {
    res.json(partidas);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao listar partidas", erro: error });
  }
});

app.get("/partidas/:id", (req: Request, res: Response) => {
  try {
    const partida = partidas.find((p) => p.id === Number(req.params.id));
    if (!partida)
      return res.status(404).json({ mensagem: "Partida não encontrada" });

    res.json(partida);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar partida", erro: error });
  }
});

app.put("/partidas/:id", (req: Request, res: Response) => {
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
});

app.delete("/partidas/:id", (req: Request, res: Response) => {
  try {
    const index = partidas.findIndex((p) => p.id === Number(req.params.id));
    if (index === -1)
      return res.status(404).json({ mensagem: "Partida não encontrada" });

    partidas.splice(index, 1);
    res.json({ mensagem: "Partida removida com sucesso" });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao remover partida", erro: error });
  }
});

app.post("/convites", (req: Request, res: Response) => {
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
});

app.get("/convites", (req: Request, res: Response) => {
  try {
    res.json(convites);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao listar convites", erro: error });
  }
});

app.get("/convites/:id", (req: Request, res: Response) => {
  try {
    const convite = convites.find((c) => c.id === Number(req.params.id));
    if (!convite)
      return res.status(404).json({ mensagem: "Convite não encontrado" });

    res.json(convite);
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao buscar convite", erro: error });
  }
});

app.put("/convites/:id", (req: Request, res: Response) => {
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
});

app.delete("/convites/:id", (req: Request, res: Response) => {
  try {
    const index = convites.findIndex((c) => c.id === Number(req.params.id));
    if (index === -1)
      return res.status(404).json({ mensagem: "Convite não encontrado" });

    convites.splice(index, 1);
    res.json({ mensagem: "Convite removido com sucesso" });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao remover convite", erro: error });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
