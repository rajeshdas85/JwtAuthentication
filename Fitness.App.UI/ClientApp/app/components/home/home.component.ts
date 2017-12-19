import { Component } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, NavigationExtras, CanLoad, Route } from '@angular/router';
import { AuthGuard } from '../../services/auth-guard.service';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [AuthGuard]
})
export class HomeComponent {
    constructor(private authGuard: AuthGuard) { }
}
