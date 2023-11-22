import express, { Router } from 'express';
import register from '../controller/auth';
import validateRegister from '../middleware/validateRegister';
import { RegisterSchema } from '../validate';

const router: Router = express.Router();

router.post('/register', validateRegister(RegisterSchema), register);

export default router;
