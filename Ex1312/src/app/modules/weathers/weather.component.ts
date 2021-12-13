import { Weather } from './../../shared/weather.model';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather?: Weather;
  city: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  search(city:string){
      this.weatherService.getWeather(city).subscribe(
      weather => this.weather = weather
    );
   
  }
}
