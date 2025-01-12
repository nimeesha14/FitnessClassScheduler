import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFitnessComponent } from './add-fitness.component';

describe('AddFitnessComponent', () => {
  let component: AddFitnessComponent;
  let fixture: ComponentFixture<AddFitnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFitnessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
