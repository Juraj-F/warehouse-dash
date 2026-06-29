import { loginUser } from '../services/authService.js';

export async function loginController(req, res, next) {

  const {email, password} = req.body
    console.log("destruct in controller",email, password)

  try {
    const result = await loginUser({email, password});
    res.json(result);
  } catch (error) {
    next(error);
  }
}
