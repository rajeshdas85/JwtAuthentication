export class RequestResult {
    constructor(State?: number, Msg?: string, Data?: Object) {
        this.State = State;
        this.Msg = Msg;
        this.Data = Data;
    }
    State: number;
    Msg: string;
    Data: Object;
}