import { Router } from "express";
import {
  criarPartida,
  listarPartidas,
  buscarPartida,
  atualizarPartida,
  deletarPartida,
} from "../controllers/partidaController.ts";

const router = Router();

router.post("/", criarPartida);
router.get("/", listarPartidas);
router.get("/:id", buscarPartida);
router.put("/:id", atualizarPartida);
router.delete("/:id", deletarPartida);

export default router;
