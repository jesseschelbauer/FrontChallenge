export class LoginModel {
    public email: string = "";
    public password: string = "";
}

export interface AuthInfo {
    isLoggedIn: boolean;
    token: string | null;
}

export interface LoginRespose {
    token: string;
    user: LoginUserInfo;
}

export interface LoginUserInfo{
    name:string;
    cpf:string;
}

export interface registerRespose {
    
}
export class RegisterModel {
    public email: string = "";
    public password: string = "";
    public cpf: string = "";
}

export const TOKEN_KEY = "TOKEN_KEY";