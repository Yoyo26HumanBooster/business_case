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

  constructor() { }

  ngOnInit(): void {
  }
    
  // onSubmitNewCar(form: NgForm): void {

  //   const book = new Car(form.value.reference, form.value.brand, form.value.model, form.value.description, form.value.price, form.value.registrationYear, form.value.mileage, form.value.fuel, form.value.photo);
    
  //   this.CarService.addBook(car).then(() => {
  //   this.router.navigate(['cars']);
  //   });  
  // }

}
