import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { handleHttp } from "../utils/error.handle";
import { verifyToken } from "../utils/jwt.handle";

interface RequestExtended extends Request {
  user?: string | JwtPayload;
}

const checkJwt =  (req: RequestExtended, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || '';
    const jwt = jwtByUser.split(' ').pop();
    const isUser = verifyToken(`${jwt}`);
    console.log(isUser)
    if (!isUser) {
      res.status(401).send({
        message: 'No autorizado',
      });
    } else {
      req.user = isUser;
      console.log({jwtByUser, jwt, isUser});
      next();
    }
 } catch (error) {
  //  handleHttp(res, 'ERROR_GET_BLOGS');
   res.status(400).send('SESSION_NOT_VALID');
 }
};

export { checkJwt };