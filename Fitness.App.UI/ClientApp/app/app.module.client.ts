import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { sharedConfig } from './app.module.shared';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { SimpleGlobal } from 'ng2-simple-global';
@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ...sharedConfig.imports
    ],
    providers: [
        //{ provide: 'ORIGIN_URL', useValue: location.origin },
        { provide: 'ORIGIN_URL', useValue: 'http://localhost:57323' },
        AuthService, AuthGuard, SimpleGlobal
    ]
})
export class AppModule {
}
