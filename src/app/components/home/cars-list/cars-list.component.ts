import { Component, OnInit, OnDestroy } from '@angular/core';
import {Car} from 'src/app/models/car.model';
import {Subscription} from 'rxjs';
import {CarService} from 'src/app/services/car/car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit, OnDestroy {

  cars: Array<Car>;
  carsSub: Subscription;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    // First initialize subs
    this.initSubs();

    // Then call the API
    this.carService.getCars();
  }

  private initSubs(): void {
    this.carsSub = this.carService.cars.subscribe(
      (newCarsVal: Array<Car>) => this.cars = newCarsVal
    );
  }

  ngOnDestroy(): void {
    this.carsSub.unsubscribe();
  }

}