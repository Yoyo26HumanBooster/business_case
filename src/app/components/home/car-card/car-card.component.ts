import { Component, Input, OnInit } from '@angular/core';
import {Car} from 'src/app/models/car.model';
import {CarService} from 'src/app/services/car/car.service';


@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  @Input() car: Car;
  
  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }

}

