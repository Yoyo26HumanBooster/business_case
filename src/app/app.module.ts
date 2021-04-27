import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './components/home/filters/filters.component';
import { CarsListComponent } from './components/home/cars-list/cars-list.component';
import { CarCardComponent } from './components/home/car-card/car-card.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FilterYearComponent } from './components/home/filters/filter-year/filter-year.component';
import { FilterMileageComponent } from './components/home/filters/filter-mileage/filter-mileage.component';
import { FilterPriceComponent } from './components/home/filters/filter-price/filter-price.component';
import { FormsModule } from '@angular/forms';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { NewCarViewComponent } from './views/new-car-view/new-car-view.component';
import { CarService } from './services/car/car.service';
import { SingleCarViewComponent } from './views/single-car-view/single-car-view.component';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FiltersComponent,
    CarsListComponent,
    CarCardComponent,
    HomeViewComponent,
    FilterYearComponent,
    FilterMileageComponent,
    FilterPriceComponent,       
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CarService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
