import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { postType } from 'utils';

const prisma = new PrismaClient();

const createPost = async (req: Request, res: Response) => {
  const { bio, imageUrl } = req.body;
  const userId = req.user;

  let imageUrl_temp = imageUrl;

  if (!imageUrl_temp) {
    imageUrl_temp = '';
  }

  const createdPost = await prisma.post.create({
    data: {
      bio: bio,
      imageUrl: imageUrl_temp,
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

const getAllPost = async (req: Request, res: Response) => {
  try {
    const allPost = await prisma.post.findMany();

    return res.status(200).json({
      message: 'get all Post',
      data: allPost,
      total: allPost.length,
    });
  } catch (error) {
    return res.json(error);
  }
};

const getPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const hasPost = await prisma.post.findFirst({
      where: {
        id: id,
      },
    });

    return res.status(200).json({
      message: 'success get Post',
      data: {
        hasPost,
      },
    });
  } catch (error) {
    return res.json(error);
  }
};

const deletePostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletePost = await prisma.post.delete({
      where: {
        id: id,
      },
    });

    return res.status(200).json({
      message: 'success post delete',
    });
  } catch (error) {
    return res.json(error);
  }
};

const getPostsByUsername = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const userWithPost = await prisma.user.findFirst({
      where: {
        username: username,
      },
      include: {
        posts: true,
      },
    });

    if (!userWithPost) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    return res.status(200).json({
      message: 'success get userid with all post',
      result: userWithPost,
    });
  } catch (error) {
    return res.json(error);
  }
};

export { createPost, getPostById, getAllPost, deletePostById, getPostsByUsername };
