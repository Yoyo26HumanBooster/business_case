import { Component, OnInit } from '@angular/core';
import { LabelType, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-filter-mileage',
  templateUrl: './filter-mileage.component.html',
  styleUrls: ['./filter-mileage.component.css']
})
export class FilterMileageComponent implements OnInit {

  minValue: number = 0;
  maxValue: number = 250000;
  options: Options = {
    floor: 0,
    step: 500,
    ceil: 250000,
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
