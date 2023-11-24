import { NextFunction, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../helpers/bcrypt';

const prisma = new PrismaClient();

const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const foundUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!foundUser) {
      return res.status(404).json({
        message: 'id not found',
      });
    }

    return res.status(200).json({
      message: 'user found',
      data: foundUser,
    });
  } catch (error) {
    return res.json(error);
  }
};

const updateUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { username, email, password } = req.body;
    const hashedPassword = hashPassword(password);
    let imageUrl_temp = req.body.imageUrl;

    if (!imageUrl_temp) {
      imageUrl_temp =
        'https://res.cloudinary.com/dgmm08cpq/image/upload/v1700748499/qd93vilhj7whd0ad5hgv.jpg';
    }

    if (!username)
      return res.status(401).json({
        message: 'username cannot be empty',
      });

    if (!password)
      return res.status(401).json({
        message: 'password cannot be empty',
      });

    if (!email)
      return res.status(401).json({
        message: 'email cannot be empty',
      });

    const existingEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    const foundUser = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    if (existingEmail?.email) {
      if (existingEmail.email === foundUser?.email) {
        const updatedUser = await prisma.user.update({
          where: {
            id: id,
          },
          data: {
            username: username,
            email: email,
            password: hashedPassword,
            imageUrl: imageUrl_temp,
          },
        });
        return res.status(200).json({
          message: 'success update user',
          data: updatedUser,
        });
      } else {
        return res.status(400).json({
          message: 'email has taken',
        });
      }
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        username: username,
        email: email,
        password: hashedPassword,
        imageUrl: imageUrl_temp,
      },
    });
    return res.status(200).json({
      message: 'success update user',
      data: updatedUser,
    });
  } catch (error) {
    return res.json(error);
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const allUser = await prisma.user.findMany();

    return res.status(200).json({
      message: 'success get All User',
      data: {
        allUser,
        total: allUser.length,
      },
    });
  } catch (error) {
    return res.json(error);
  }
};

export { getUserById, getAllUser, updateUserById };
