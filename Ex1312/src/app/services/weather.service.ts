import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../shared/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly http: HttpClient) { }

  getWeather(city: string): Observable<Weather>{
    const params = new HttpParams()
    .set('units', 'metric')
    .set('q', city)
    .set ('appId', 'b640bd58f541be2cc9af89591628db05')
    .set('lang', 'it')
    return this.http.get<Weather>(environment.apiUrl, { params })
  }

}
