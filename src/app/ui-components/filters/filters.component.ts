import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

/*properties for price slider component*/
minValue: number = 0;
maxValue: number = 750;

 
 options: Options = {
 floor: 0,
 step: 50,
 ceil: 1000,
 showTicks: false,
 animate: true,
 hideLimitLabels:true
};

/*properties for price slider component ends*/
}
