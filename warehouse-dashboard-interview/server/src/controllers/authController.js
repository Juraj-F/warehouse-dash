import { loginUser } from '../services/authService.js';

export async function loginController(req, res, next) {
  try {
    const result = await loginUser(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
}
