export interface ISignup {
    id?: number;
    name: string;
    email: string;
    follow_id?: number[];
    password: string;
}

export interface ISignin {
    id?: number,
    email: string,
    password: string
}
