import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FitnessService } from '../fitness.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';




@Component({
  selector: 'app-list-fitness',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-fitness.component.html',
  styleUrls: ['./list-fitness.component.css']
})
export class ListFitnessComponent implements OnInit {
  fitness: any;

  constructor(private fitnessService: FitnessService, private router: Router) {

  }

  ngOnInit(): void {
    this.fitnessService.listFitness().subscribe((data: any) => {
      this.fitness = data.Fitness;
    });
    // Initialize component here
  }

  deleteFitness(fitnessId: any) {
    this.fitnessService.deleteSFitness(fitnessId).
      subscribe((data: any) => {
        //this.fitness = this.fitness.filter((u: any) => u.id !== fitnessId);
        //this.router.navigate(['/list-fitness']);

        setTimeout(() => {
          this.fitnessService.listFitness().subscribe((data: any) => {
            this.fitness = data.Fitness;
          });
        }, 1000);

      });

  }
}

