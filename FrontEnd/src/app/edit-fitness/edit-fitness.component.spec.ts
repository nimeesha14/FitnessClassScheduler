import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFitnessComponent } from './edit-fitness.component';

describe('EditFitnessComponent', () => {
  let component: EditFitnessComponent;
  let fixture: ComponentFixture<EditFitnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFitnessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
