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
