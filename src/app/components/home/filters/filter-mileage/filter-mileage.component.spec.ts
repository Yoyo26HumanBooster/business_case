import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMileageComponent } from './filter-mileage.component';

describe('FilterMileageComponent', () => {
  let component: FilterMileageComponent;
  let fixture: ComponentFixture<FilterMileageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterMileageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMileageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
