import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FitnessService } from '../fitness.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-fitness',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './add-fitness.component.html',
  styleUrls: ['./add-fitness.component.css']
})
export class AddFitnessComponent implements OnInit {
  
  fitnessForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private fitnessService: FitnessService
  ) {
    this.fitnessForm = this.fb.group({
      name: ['', Validators.required],
      trainer: ['', Validators.required],
      category: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]],
      capacity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.fitnessForm.valid) {
      console.log('Submitting form:', this.fitnessForm.value);

      this.fitnessService.addFitness(
        this.fitnessForm.value.name,
        this.fitnessForm.value.trainer,
        this.fitnessForm.value.category,
        this.fitnessForm.value.duration,
        this.fitnessForm.value.capacity
      ).pipe(first()).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.router.navigate(['list-fitness']);
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
    }
  }
}
