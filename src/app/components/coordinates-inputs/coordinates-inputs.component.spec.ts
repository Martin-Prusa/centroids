import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatesInputsComponent } from './coordinates-inputs.component';

describe('CoordinatesInputsComponent', () => {
  let component: CoordinatesInputsComponent;
  let fixture: ComponentFixture<CoordinatesInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatesInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatesInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
