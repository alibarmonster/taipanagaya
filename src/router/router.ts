import express, { Response, Router } from 'express';
import * as authController from '../controller/auth';
import validateRegister from '../middleware/validateRegister';
import { LoginSchema, RegisterSchema } from '../Schema/userSchema';
import validateLogin from '../middleware/ValidateLogin';
import { verifyJwt } from '../middleware/verifyJwt';
import * as userController from '../controller/user';
import * as postController from '../controller/post';
import { upload } from '../middleware/multer';
import { uploadWithCloudinary } from '../helpers/cloudinary';

const router: Router = express.Router();

//auth router
router.post('/register', validateRegister(RegisterSchema), authController.register);
router.post('/login', validateLogin(LoginSchema), authController.login);

//user router
router.get('/users/:id', userController.getUserById);
router.get('/users', userController.getAllUser);
router.put(
  '/users/:id',
  verifyJwt,
  upload.single('imageUrl'),
  uploadWithCloudinary,
  userController.updateUserById,
);
router.delete('/users/:id', userController.deleteUserById);

// Posts router
router.post(
  '/posts',
  verifyJwt,
  upload.single('imageUrl'),
  uploadWithCloudinary,
  postController.createPost,
);

export default router;
