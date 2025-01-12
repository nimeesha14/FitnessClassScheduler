import { Routes } from '@angular/router';
import { AddFitnessComponent } from './add-fitness/add-fitness.component';

export const routes: Routes = [
    { path: 'add-fitness', component: AddFitnessComponent },
    { path: '', redirectTo: '/add-fitness', pathMatch: 'full' }  // Optional: redirect empty path to add-fitness
];
