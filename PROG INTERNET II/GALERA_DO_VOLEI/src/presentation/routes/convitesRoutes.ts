import { Router } from "express";
import {
  criarConvite,
  listarConvites,
  buscarConvite,
  atualizarConvite,
  deletarConvite,
} from "../controllers/conviteController.ts";
import { verificarTokenFalso } from "../middleware/verificarTokenFalso.ts";

const router = Router();

router.use(verificarTokenFalso);

router.post("/", criarConvite);
router.get("/", listarConvites);
router.get("/:id", buscarConvite);
router.put("/:id", atualizarConvite);
router.delete("/:id", deletarConvite);

export default router;
