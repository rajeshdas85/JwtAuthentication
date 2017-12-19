import { Component, Inject } from '@angular/core';
import { Headers, Http} from "@angular/http";
import { AuthService } from '../../services/auth.service';
import { EmailModel } from "../../model/email.model";
@Component({
    selector: 'fetchpostdata',
    templateUrl: './fetchpostdata.component.html'
})
export class FetchPostDataComponent {
    private localUrl: string;
    public forecasts: WeatherForecast[];
    emailModel = new EmailModel();
    constructor(public authService: AuthService, http: Http, @Inject('ORIGIN_URL') originUrl: string) {
        this.localUrl = originUrl;
    }
    ValidateEmailID() {
        let data = {
            "userName": this.emailModel.userName,
            "emailId": this.emailModel.emailId
        }
        let emailUser = JSON.stringify(data);
        this.authService.authPostSubmit(this.localUrl + '/api/JwtAuthTest/PostWeatherForecasts', emailUser)
            .then(result => {
                if (result.State == 1) {
                    this.forecasts = result.access_token as WeatherForecast[];
                }
                else {
                    alert(result.access_token);
                }
            });
    }

}

interface WeatherForecast {
    DateFormatted: string;
    TemperatureC: number;
    TemperatureF: number;
    Summary: string;
}
