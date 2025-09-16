import { Router } from "express";
import {
  criarJogador,
  listarJogadores,
  buscarJogador,
  atualizarJogador,
  deletarJogador,
} from "../controllers/jogadorController.ts";

const router = Router();

router.post("/", criarJogador);
router.get("/", listarJogadores);
router.get("/:id", buscarJogador);
router.put("/:id", atualizarJogador);
router.delete("/:id", deletarJogador);

export default router;
