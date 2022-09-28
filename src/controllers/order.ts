import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { handleHttp } from "../utils/error.handle";

interface RequestExtended extends Request {
  user?: string | JwtPayload;
}

const getItems = (req: RequestExtended, res: Response) => {
  try {
    res.send({
      data: "ESTO LO PUEDE VER SOLO UN USUARIO AUTENTICADO",
      user: req.user,
    })
  } catch (error) {
    handleHttp(res, 'ERROR_GET_BLOGS');
  }
};

export { getItems };