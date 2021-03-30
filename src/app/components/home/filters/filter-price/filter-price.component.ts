import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.css']
})
export class FilterPriceComponent implements OnInit {

  minValue: number = 0;
  maxValue: number = 75000;
  options: Options = {
    floor: 0,
    step: 500,
    ceil: 75000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min:</b> " + value;
        case LabelType.High:
          return "<b>Max:</b> " + value;
        default:
          return "" + value;
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
