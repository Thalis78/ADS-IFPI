import express from "express";
import cors from "cors";

import jogadoresRoutes from "../src/presentation/routes/jogadoresRoutes.ts";
import partidasRoutes from "../src/presentation/routes/partidasRoutes.ts";
import convitesRoutes from "../src/presentation/routes/convitesRoutes.ts";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/jogadores", jogadoresRoutes);
app.use("/partidas", partidasRoutes);
app.use("/convites", convitesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
