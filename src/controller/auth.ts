import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { comparePassword, hashPassword } from '../helpers/bcrypt';
import { RegisterType } from '../utils';

const prisma = new PrismaClient();

const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password }: RegisterType = req.body;

    const existingEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingEmail) {
      return res.status(400).json({
        message: 'email has taken',
      });
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (existingUser) {
      return res.status(400).json({
        message: 'username has taken',
      });
    }

    const encryptedPassword = hashPassword(password);

    const createdUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: encryptedPassword,
        imageUrl:
          'https://storage.googleapis.com/assets-enterity/profile_picture/Enterity_logo.png',
      },
    });

    res.status(201).json(createdUser);
  } catch (error) {
    console.log(error);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username) {
      res.status(400).json({
        message: 'username required',
      });
    }

    if (!password) {
      res.status(400).json({
        message: 'password required',
      });
    }

    const existingUsername = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!existingUsername) {
      return res.status(400).json({
        message: 'Username is not registered',
      });
    }

    const passwordMatches = comparePassword(password, existingUsername.password);

    if (!passwordMatches) {
      return res.status(400).json({
        message: 'wrong password or username',
      });
    }

    if (passwordMatches) {
      return res.status(200).json({
        message: 'user login succesfully',
      });
    }
  } catch (error) {
    return res.json(error);
  }
};

export { register, login };
