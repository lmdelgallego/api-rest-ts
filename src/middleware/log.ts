import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers["user-agent"];
  const method = req.method;
  console.log(`Request Endpont: ${method} ${req.url} with ${header} `);
  next();
};

export { logMiddleware };