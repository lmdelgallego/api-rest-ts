import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth.service"

const registerCtrl = async ({body}: Request, res: Response) => {
  const user = await registerNewUser(body)
  res.send(user)
}

const loginCtrl = async ({ body }: Request, res: Response) => {
  const {email, password} = body;
  const user = await loginUser({ email, password })
  if (user === 'USER_NOT_FOUND') return res.status(404).send(user);
  if (user === 'PASSWORD_INCORRECT') return res.status(403).send(user);
  res.send({user})
}

export { registerCtrl, loginCtrl }