import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'Fitness-Logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
    constructor(private router: Router) {
    }
    login() {
        this.router.navigate(["/login"]);
    }
}
