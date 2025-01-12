import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FitnessService } from '../fitness.service';
import { Fitness } from '../fitness.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-fitness',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './edit-fitness.component.html',
  styleUrls: ['./edit-fitness.component.css']
})
export class EditFitnessComponent implements OnInit {

  fitnessForm: FormGroup;
  error: any;
  subscription: any;
  id: any;
  fit: any;
  success: string = '';
  class: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private fitnessService: FitnessService,
    private activeRoute: ActivatedRoute
  ) {
    this.fitnessForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      trainer: ['', Validators.required],
      category: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]],
      capacity: ['', [Validators.required, Validators.min(1)]]
    });

    this.subscription = this.activeRoute.paramMap.subscribe(
      (params: any) => {
        this.id = params.get('id');
      }
    );
  }
  ngOnInit(): void {
    this.getSingleFitness(this.id);
  }

  getSingleFitness(id: any): void {
    this.fitnessService.getFitnessById(id).subscribe({
      next: (res: any) => {
        this.fit = res;
        // Set form values
        this.fitnessForm.patchValue({
          id: this.id,
          name: res.name,
          trainer: res.trainer,
          category: res.category,
          duration: res.duration,
          capacity: res.capacity
        });
      },
      error: (err) => {
        this.error = err;
      }
    });
  }


  editData(f: any) {
    this.fitnessService.updateFitness(f.value).subscribe({
      next: (res: any) => {
        this.class = res;
        // this.success = "Updated Successfully";
        this.router.navigate(['/list-fitness']);
        // f.reset();
      },
      error: (err: any) => {
        this.error = err;
      }
    });
  }

}
