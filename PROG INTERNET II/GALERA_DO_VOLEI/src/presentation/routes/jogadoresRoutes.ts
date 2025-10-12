import { Router } from "express";
import {
  criarJogador,
  listarJogadores,
  buscarJogador,
  atualizarJogador,
  deletarJogador,
} from "../controllers/jogadorController.ts";
import { verificarTokenFalso } from "../middleware/verificarTokenFalso.ts";

const router = Router();

router.use(verificarTokenFalso);

router.post("/", criarJogador);
router.get("/", listarJogadores);
router.get("/:id", buscarJogador);
router.put("/:id", atualizarJogador);
router.delete("/:id", deletarJogador);

export default router;
