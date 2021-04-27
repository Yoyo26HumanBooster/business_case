import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { NewCarViewComponent } from './views/new-car-view/new-car-view.component';
import { SingleCarViewComponent } from './views/single-car-view/single-car-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent},
  { path: 'login', component: AuthViewComponent},
  { path: 'car/new', component: NewCarViewComponent},
  { path: 'car/:id', component: SingleCarViewComponent}
];

@NgModule({
  declarations: [
    NewCarViewComponent,
    AuthViewComponent,
    SingleCarViewComponent    
  ],
  imports: [
    RouterModule.forRoot(routes)],

  
exports: [RouterModule]
})
export class AppRoutingModule { }
