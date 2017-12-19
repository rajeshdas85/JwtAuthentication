export class ResponseResult {
    constructor(State?: number, expires_in?: number, access_token?: Object, expire_datetime?: string) {
        this.State = State;
        this.expires_in = expires_in;
        this.access_token = access_token;
        this.expire_datetime = expire_datetime
    }
    State: number;
    access_token: Object;
    expires_in: number;
    expire_datetime: string;
}