export type RegisterType = {
  username: string;
  email: string;
  password: string;
  role: Role;
  imageUrl: string;
};

enum Role {
  USER,
  ADMIN,
}
