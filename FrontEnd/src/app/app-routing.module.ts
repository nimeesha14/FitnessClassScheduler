import { Routes } from '@angular/router';
import { AddFitnessComponent } from './add-fitness/add-fitness.component';
import { ListFitnessComponent } from './list-fitness/list-fitness.component';
import { EditFitnessComponent } from './edit-fitness/edit-fitness.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add-fitness', component: AddFitnessComponent },
  { path: 'list-fitness', component: ListFitnessComponent },
  { path: 'edit-fitness/:id', component: EditFitnessComponent }
];