export interface ISignup {
    id?: number;
    name?: string;
    email: string;
    follow_id?: number[];
    password: string;
}

export interface ISignin {
    id?: number,
    email: string,
    password: string
}

export interface IUser {
    _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}