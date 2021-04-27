import { Component, OnInit } from '@angular/core';
import { CarService } from './../../services/car/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-car-view',
  templateUrl: './single-car-view.component.html',
  styleUrls: ['./single-car-view.component.css']
})
export class SingleCarViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
