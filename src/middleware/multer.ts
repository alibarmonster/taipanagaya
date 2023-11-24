import multer, { Multer } from 'multer';

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload: Multer = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});
