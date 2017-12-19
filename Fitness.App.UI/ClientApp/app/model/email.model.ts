export class EmailModel {
    constructor(userName?: string, emailId?: string) {
        this.userName = userName;
        this.emailId = emailId;
    }
    userName: string;
    emailId: string;
}