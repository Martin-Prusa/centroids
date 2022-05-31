import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroidInfoComponent } from './centroid-info.component';

describe('CentroidInfoComponent', () => {
  let component: CentroidInfoComponent;
  let fixture: ComponentFixture<CentroidInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroidInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroidInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
