import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interface/req-ext";
import { verifyToken } from "../utils/jwt.handle";


const checkJwt =  (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || '';
    const jwt = jwtByUser.split(' ').pop();
    const isUser = verifyToken(`${jwt}`) as { id: string };
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