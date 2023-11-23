import express, { Response, Router } from 'express';
import * as authController from '../controller/auth';
import validateRegister from '../middleware/validateRegister';
import { LoginSchema, RegisterSchema } from '../Schema/userSchema';
import validateLogin from '../middleware/ValidateLogin';
import { verifyJwt } from '../middleware/verifyJwt';
import * as userController from '../controller/user';
import * as postController from '../controller/post';
import { verifyRoles } from '../middleware/verifyRoles';
import { Role } from '../utils';

const router: Router = express.Router();

//auth router
router.post('/register', validateRegister(RegisterSchema), authController.register);
router.post('/login', validateLogin(LoginSchema), authController.login);

//user router
router.get('/users/:id', userController.getUserById);
router.get('/users', userController.getAllUser);
router.get('/alibar', verifyJwt, verifyRoles(Role.ADMIN), async (req, res: Response) => {
  return res.json('only admin can access this resource');
});

// Posts router
router.post('/posts', verifyJwt, postController.createPost);
export default router;
