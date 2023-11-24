import { v2 as cloudinary } from 'cloudinary';
import { NextFunction, Request, Response } from 'express';
import fs from 'fs';

require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const uploadWithCloudinary = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file) {
      next();
    } else {
      const folder = `assets/${req.file.mimetype.split('/')[0]}`;

      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: folder,
        resource_type: 'image',
        public_id: req.file.originalname,
      });

      fs.unlinkSync(req.file.path);
      req.body.imageUrl = uploadResult.secure_url;
      next();
    }
  } catch (error) {
    fs.unlinkSync(req.file!.path);
    console.log(error);
  }
};
