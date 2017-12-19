import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../../app/services/auth.service";
import { LoginModel } from "../../model/login.model";
@Component({
    selector: 'Fitness-Login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthService]
})
export class LoginComponent {
    loginModel = new LoginModel();
    constructor(private router: Router, private authService: AuthService) {
    }
    login() {
        this.authService.login(this.loginModel.userName, this.loginModel.password)
            .then(result => {
                if (result.State == 1) {
                    this.router.navigate(["/nav-menu"]);
                }
                else {
                    alert(result.access_token);
                }
            });
    }
}
