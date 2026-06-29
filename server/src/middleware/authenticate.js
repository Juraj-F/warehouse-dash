import jwt from 'jsonwebtoken';
import { createHttpError } from '../utils/createHttpError.js';

export function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  console.log("header request in authenticate", req.headers, req.headers.authorization)

  if (!authHeader?.startsWith('Bearer ')) {
    return next(createHttpError(401, 'Missing authorization token'));
  }

  const token = authHeader.split(' ')[1];

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET || 'dev_secret');
    next();
  } catch {
    next(createHttpError(401, 'Invalid or expired token'));
  }
}