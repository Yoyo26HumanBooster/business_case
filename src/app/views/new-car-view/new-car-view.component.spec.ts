import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarViewComponent } from './new-car-view.component';

describe('NewCarViewComponent', () => {
  let component: NewCarViewComponent;
  let fixture: ComponentFixture<NewCarViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCarViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
