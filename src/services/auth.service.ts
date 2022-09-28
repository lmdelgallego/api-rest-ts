import { Auth } from "../interface/auth.interface"
import { User } from "../interface/user.interface"
import UserModel from "../models/user"
import { encrypt, verified } from "../utils/bcrypt.handle"
import { generateToken } from "../utils/jwt.handle"

const registerNewUser = async ({email, password, name}: User) => {
  const checkIs = await UserModel.findOne({ email })
  if (checkIs) return 'USER_ALREADY_EXISTS';
  const passHash = await encrypt(password);
  const newUser = await UserModel.create({ email, password: passHash, name })
  return newUser

}

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email })
  if (!checkIs) return 'USER_NOT_FOUND';
  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);
  if (!isCorrect) return 'PASSWORD_INCORRECT';
  const token = generateToken(checkIs.email);
  return {token, user: checkIs};
}

export { registerNewUser, loginUser }