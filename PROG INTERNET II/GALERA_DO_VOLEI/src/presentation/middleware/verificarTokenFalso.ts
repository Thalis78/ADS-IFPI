import type { Request, Response, NextFunction } from "express";

const TOKEN_FALSO = "Thalis123";

export const verificarTokenFalso = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ mensagem: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1];

  if (token !== TOKEN_FALSO) {
    return res.status(401).json({ mensagem: "Token inválido" });
  }

  next();
};
