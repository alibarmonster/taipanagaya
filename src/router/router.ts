import express, { Router } from 'express';
import { register, login } from '../controller/auth';
import validateRegister from '../middleware/validateRegister';
import { LoginSchema, RegisterSchema } from '../Schema/userSchema';
import validateLogin from '../middleware/ValidateLogin';

const router: Router = express.Router();

router.post('/register', validateRegister(RegisterSchema), register);
router.post('/login', validateLogin(LoginSchema), login);

export default router;
