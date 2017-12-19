import { Injectable, Inject } from "@angular/core";
import { Headers, Http, URLSearchParams, RequestOptions, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";
import 'rxjs/add/operator/map';
import { RequestResult } from "../model/requestresult.model";
import { ResponseResult } from "../model/responseresult.model";
import { SimpleGlobal } from "ng2-simple-global";
import jwtLib from 'jsonwebtoken';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class AuthService {
    private tokeyKey = "token";
    private tokeyExpireTime: Date;
    private tokeyExpKey = "tokenExpTime";
    private token: string;
    private localUrl: string;
    constructor(
        public http: Http, @Inject('ORIGIN_URL') originUrl: string, public sg: SimpleGlobal
    ) {
        this.localUrl = originUrl;
    }
    login(userName: string, password: string): Promise<ResponseResult> {

        let data = {
            "userName": userName,
            "password": password
        }
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let applicationUser = JSON.stringify(data);
        let options = new RequestOptions({ headers: headers });

        if (this.checkLogin()) {
            return this.authPost(this.localUrl + '/api/Jwt', applicationUser, options);
        }
        else {
            return this.http.post(this.localUrl + '/api/Jwt', applicationUser, options).toPromise()
                .then(
                response => {
                    let result = response.json() as ResponseResult;
                    if (result.State == 1) {
                        let json = result.access_token as any;
                        localStorage.setItem(this.tokeyKey, json);
                        localStorage.setItem(this.tokeyExpKey, result.expire_datetime);
                        this.sg['isUserExist'] = true;
                    }
                    return result;
                }
                )
                .catch(this.handleError);
        }
    }
    loggedIn() {
        if (!tokenNotExpired()) {
            this.sg['isUserExist'] = false;
        }
        return tokenNotExpired();
    }
    logout() {
        this.sg['isUserExist'] = false;
        localStorage.removeItem(this.tokeyKey);
    }
    checkTokenExpireTime(): boolean {

        //var decoded = jwtLib.verify(this.tokeyKey, sessionStorage.removeItem(this.tokeyKey));
        var isExpiredToken = false;

        var dateNow = new Date();
       // this.authService.checkLogin()
        var dateTokenNow = localStorage.getItem(this.tokeyExpKey);
        let newDate = new Date(dateTokenNow);

        if (newDate.getTime() < dateNow.getTime()) {
            isExpiredToken = true;
        }
        return isExpiredToken;
        //var token = sessionStorage.getItem(this.tokeyKey);
        //if (token != null) {
        //    return token != null;
        //}
    }

    checkLogin(): boolean {
        var token = localStorage.getItem(this.tokeyKey);
        if (token != null) {
            return token != null;
        }
    }
    authPost(url: string, body: any, options?: RequestOptions): Promise<ResponseResult> {
        let headers = this.initAuthHeaders();
        return this.http.post(url, body, options).toPromise()
            .then(response => response.json() as ResponseResult)
            .catch(this.handleError);
    }
    authPostSubmit(url: string, body: any): Promise<ResponseResult> {
        let headers = this.initAuthHeaders();
        return this.http.post(url, body,{ headers: headers }).toPromise()
            .then(response => response.json() as ResponseResult)
            .catch(this.handleError);
    }

    authGet1(url: string) {
        let headers = this.initAuthHeaders();
        return this.http.get(url, { headers: headers })
            .map((res: Response) => res.json());
    }

    authGet(url): Promise<ResponseResult> {
        let headers = this.initAuthHeaders();
        return this.http.get(url, { headers: headers }).toPromise()
            .then(response => response.json() as ResponseResult)
            .catch(this.handleError);
    }
    authGet2(url): Promise<RequestResult> {
        let headers = this.initAuthHeaders();
        return this.http.get(url, { headers: headers }).toPromise()
            .then(response => response.json() as RequestResult)
            .catch(this.handleError);
    }

    private getLocalToken(): string {
        if (!this.token) {
            this.token = localStorage.getItem(this.tokeyKey);
        }
        return this.token;
    }

    private initAuthHeaders(): Headers {
        let token = this.getLocalToken();
        if (token == null) throw "No token";
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
        return headers;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}