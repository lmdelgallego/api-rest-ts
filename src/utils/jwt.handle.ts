import {sign, verify} from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const generateToken = (id: string) => sign({id}, JWT_SECRET, {expiresIn: '1d'});

const verifyToken = (token: string) => verify(token, JWT_SECRET);

export {generateToken, verifyToken};