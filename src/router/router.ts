import express, { Router } from 'express';
import { register, login } from '../controller/auth';
import validateRegister from '../middleware/validateRegister';
import { LoginSchema, RegisterSchema } from '../Schema/userSchema';
import validateLogin from '../middleware/ValidateLogin';
import { verifyJwt } from '../middleware/verifyJwt';

const router: Router = express.Router();

router.post('/register', validateRegister(RegisterSchema), register);
router.post('/login', validateLogin(LoginSchema), login);
router.get('/users', verifyJwt, async (req: express.Request, res: express.Response) => {
  return res.status(200).json({
    message: 'congrats u passed the authorization with jwt token',
  });
});

export default router;
