import { Component, Inject,Pipe } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})

export class FetchDataComponent  {
   
    public forecasts: WeatherForecast[];
   
    constructor(public authService: AuthService, http: Http, @Inject('ORIGIN_URL') originUrl: string) {
        //authService.authGet('http://localhost:56512/api/SampleData/WeatherForecasts').then(result => {
        //    //if (result.State == 1) {
        //        this.forecasts = result.Data as WeatherForecast[];
        //    //}
        //    //else {
        //    //    alert(result.Msg);
        //    //}
        //});

        //http.get(originUrl + '/api/SampleData/WeatherForecasts').subscribe(result => {
        //    this.forecasts = result.json() as WeatherForecast[];
        //});
        
      //  http://localhost:57323/api/JwtAuthTest/WeatherForecasts
        this.authService.authGet(originUrl + '/api/JwtAuthTest/WeatherForecasts').then(result => {

            if (result.State == 1) {
                this.forecasts = result.access_token as WeatherForecast[];
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
