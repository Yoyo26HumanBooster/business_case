import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { NewCarViewComponent } from './views/new-car-view/new-car-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent},
  { path: 'car/new', component: NewCarViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
