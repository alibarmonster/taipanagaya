/* trunk-ignore-all(prettier) */
import { NextFunction, Request, Response } from 'express';
import jwt, { Secret } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: any;
      roles?: any;
    }
  }
}

export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
  const secretKey: Secret = String(process.env.ACCESS_TOKEN_KEY);
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({
      message: 'unauthorized resource, provide an access code',
    });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: 'wrong token provided',
      });
    }

    if (decoded && typeof decoded === 'object' && 'id' in decoded && 'role' in decoded) {
      req.user = (decoded as jwt.JwtPayload).id;
      req.roles = (decoded as jwt.JwtPayload).role;
    }
    next();
  });
};
