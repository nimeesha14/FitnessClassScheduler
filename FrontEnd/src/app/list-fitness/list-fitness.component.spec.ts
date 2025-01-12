import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFitnessComponent } from './list-fitness.component';

describe('ListFitnessComponent', () => {
  let component: ListFitnessComponent;
  let fixture: ComponentFixture<ListFitnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFitnessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
