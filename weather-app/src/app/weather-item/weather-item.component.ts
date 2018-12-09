import { Component } from '@angular/core';
import { WeatherItem } from './weather-item';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent {
weatherItem: WeatherItem;
 /* constructor() { 
    this.weatherItem = new WeatherItem('New Delhi', 'Sunshine', '24')
  }*/



}
