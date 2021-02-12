import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-filter-year',
  templateUrl: './filter-year.component.html',
  styleUrls: ['./filter-year.component.css']
})
export class FilterYearComponent implements OnInit {

  minValue: number = 2000;
  maxValue: number = 2020;
  options: Options = {
    floor: 2000,
    ceil: 2020,
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
