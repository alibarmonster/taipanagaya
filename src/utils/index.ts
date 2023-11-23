export type RegisterType = {
  id: string;
  username: string;
  email: string;
  password: string;
  role: Role;
  imageUrl: string;
};

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export type postType = {
  bio: string;
  imageUrl: string;
  userId: string;
};
