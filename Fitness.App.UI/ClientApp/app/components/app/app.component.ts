import { Component, OnInit, OnDestroy } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions } from "@angular/http";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, NavigationExtras, CanLoad, Route } from '@angular/router';
import "rxjs/add/operator/toPromise";
import { AuthService } from '../../services/auth.service';

import { SimpleGlobal } from 'ng2-simple-global';
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AuthService, SimpleGlobal]
})

export class AppComponent implements OnInit, OnDestroy {
   
    private isUserAuth: boolean;
    //private tokeyKey = "token";
    
    constructor(
        public authService: AuthService, public sg: SimpleGlobal
    ) { 
    }
    ngOnInit() {
        this.sg['isUserExist'] = this.authService.checkLogin();
    }
    ngOnDestroy() {
      //  this.authService.logout();
    }

}
