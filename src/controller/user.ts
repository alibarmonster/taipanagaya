import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

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
  const { id } = req.params;
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

export { getUserById, getAllUser };
