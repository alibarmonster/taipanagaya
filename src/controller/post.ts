import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { postType } from 'utils';

const prisma = new PrismaClient();

const createPost = async (req: Request, res: Response) => {
  const { bio, imageUrl }: postType = req.body;
  const userId = req.user;

  const createdPost = await prisma.post.create({
    data: {
      bio: bio,
      imageUrl: imageUrl,
      userId: userId,
    },
  });

  return res.status(201).json({
    message: 'succes created',
    data: {
      createdPost,
    },
  });
};

export { createPost };
