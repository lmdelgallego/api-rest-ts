import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";
/**
 * Esta ruta solo puede ser accedida por usuarios autenticados
 */
const router = Router();

router.get("/", checkJwt, getItems);

export { router };