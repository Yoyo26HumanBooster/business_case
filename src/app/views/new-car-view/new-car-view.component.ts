import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from 'src/app/models/car.model';
import { CarService } from './../../services/car/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-car-view',
  templateUrl: './new-car-view.component.html',
  styleUrls: ['./new-car-view.component.css']
})
export class NewCarViewComponent implements OnInit {

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
  }
    
  // onSubmitNewCar(form: NgForm): void {

  //   const car = new Car(form.value.reference, form.value.brand, form.value.model, form.value.description, form.value.price, form.value.registrationYear, form.value.mileage, form.value.fuel, form.value.garage, form.value.photo, form.value.publishedAt, form.value.updatedAt);
    
  //   this.carService.addCar(car).then(() => {
  //   this.router.navigate(['cars']);
  //   });  
  // }

}
