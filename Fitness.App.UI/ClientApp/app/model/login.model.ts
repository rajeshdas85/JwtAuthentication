export class LoginModel {
    constructor(userName?: string, password?: string) {
        this.userName = userName;
        this.password = password;
    }
    userName: string;
    password: string;
}