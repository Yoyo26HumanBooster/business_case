import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Car } from 'src/app/models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string;

  cars: BehaviorSubject<Array<Car>>;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'http://localhost:8000';
    this.cars = new BehaviorSubject<Array<Car>>(null);
  }

    getCars(): void {

      this.httpClient
        .get(this.apiUrl + '/api/cars')
        .subscribe(
          (res: any) => {

            const cars = res.data.map(item => Car.fromJSON(item));
            this.cars.next(cars);

          }
        );

    }
}
