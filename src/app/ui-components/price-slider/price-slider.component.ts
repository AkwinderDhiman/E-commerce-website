import { Options } from '@angular-slider/ngx-slider';
import { Component, DoCheck, Input, OnInit, Output,EventEmitter } from '@angular/core';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.scss']
})
export class PriceSliderComponent implements OnInit, DoCheck{

  constructor(private currency_pipe_object: CurrencyPipe) { }
  
  ngDoCheck(){
    
   
  }
  ngOnInit(): void {
    
  }
  @Input() minValue: number = 0;
  @Input() maxValue:any = 750; 

  @Input() options: Options = {
    // floor: 0,
    // step: 50,
    // ceil: 1000,
    // showTicks: false
  };

  getMaxValue(){
    this.maxValue = this.currency_pipe_object.transform(this.maxValue, 'USD');
    console.log(this.maxValue)
    return this.maxValue
  }


}
