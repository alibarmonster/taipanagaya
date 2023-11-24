import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { comparePassword, hashPassword } from '../helpers/bcrypt';
import { RegisterType } from '../utils';
import jwt, { Secret } from 'jsonwebtoken';

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
    const { username, password }: RegisterType = req.body;

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

    const secretKey: Secret = String(process.env.ACCESS_TOKEN_KEY);
    const refreshKey: Secret = String(process.env.REFRESH_TOKEN_KEY);
    const accessToken = jwt.sign(existingUsername, secretKey, {
      expiresIn: '20h',
    });

    const refreshToken = jwt.sign(existingUsername, refreshKey, {
      expiresIn: '1d',
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    if (passwordMatches) {
      return res.status(200).json({
        message: 'user login succesfully',
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    }
  } catch (error) {
    return res.json(error);
  }
};

export { register, login };
