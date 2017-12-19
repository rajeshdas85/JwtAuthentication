import { Component } from '@angular/core';
import { AuthGuard } from '../../services/auth-guard.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css'],
    providers: [AuthService]
})
export class NavMenuComponent {
    constructor(
        private authService: AuthService, private authGuard: AuthGuard
    ) {

    }
    logout() {
        // remove user from local storage to log user out
        this.authService.logout();
        if (!this.authService.checkLogin()) {
            this.authGuard.redirectToLogInURL();
        }
        
        
    }
}
