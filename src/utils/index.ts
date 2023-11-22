export type RegisterType = {
  id: string;
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
