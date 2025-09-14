# API de Gerenciamento de Partidas(Galera do Volei)

Documentação simples dos endpoints da API para gerenciar uma partida de volei

---

## Jogadores

- `POST /jogadores` - Cria um novo jogador.
  - **Body:** `{ "nome": "string", "telefone": "string", "posicao": "string" }`
- `GET /jogadores` - Lista todos os jogadores.
- `GET /jogadores/:id` - Busca um jogador pelo ID.
- `PUT /jogadores/:id` - Atualiza um jogador.
  - **Body:** `{ "nome": "string", "telefone": "string", "posicao": "string" }`
- `DELETE /jogadores/:id` - Remove um jogador.

---

## Partidas

- `POST /partidas` - Cria uma nova partida.
  - **Body:** `{ "data": "string", "hora": "string", "local": "string", "limiteJogadores": number }`
- `GET /partidas` - Lista todas as partidas.
- `GET /partidas/:id` - Busca uma partida pelo ID.
- `PUT /partidas/:id` - Atualiza uma partida.
  - **Body:** `{ "data": "string", "hora": "string", "local": "string", "limiteJogadores": number }`
- `DELETE /partidas/:id` - Remove uma partida.

---

## Convites

- `POST /convites` - Cria um novo convite.
  - **Body:** `{ "jogadorId": number, "partidaId": number }`
- `GET /convites` - Lista todos os convites.
- `GET /convites/:id` - Busca um convite pelo ID.
- `PUT /convites/:id` - Atualiza o status de um convite.
  - **Body:** `{ "status": "pendente" | "aceito" | "recusado" }`
- `DELETE /convites/:id` - Remove um convite.

---
