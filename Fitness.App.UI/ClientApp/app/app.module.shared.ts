import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { FetchPostDataComponent } from './components/fetchpostdata/fetchpostdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoginComponent } from './components/login/login.component'
import { LogoutComponent } from './components/logout/logout.component'
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
//import { KeyObject } from './directives/keyobjectpipe'; 
export const sharedConfig: NgModule = {
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        FetchPostDataComponent,
        HomeComponent,
        LoginComponent,
        LogoutComponent//,
        //KeyObject
    ],
    imports: [
        FormsModule,
        RouterModule.forRoot([
       
            { path: '', redirectTo: 'Login', pathMatch: 'full' },
            { path: 'App', component: AppComponent },
            { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
            { path: 'counter', canActivate: [AuthGuard], component: CounterComponent },
            { path: 'fetch-data', canActivate: [AuthGuard], component: FetchDataComponent },
            { path: 'fetch-postdata', canActivate: [AuthGuard], component: FetchPostDataComponent },
            { path: 'nav-menu',  component: NavMenuComponent },
            { path: '**', redirectTo: 'Login' },
            { path: "login", component: LoginComponent, data: { title: "Login" } },
            { path: "logout", component: LogoutComponent, data: { title: "Login" } },
           // { path: '**', redirectTo: 'home' }
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthService, AuthGuard
    ]
};
