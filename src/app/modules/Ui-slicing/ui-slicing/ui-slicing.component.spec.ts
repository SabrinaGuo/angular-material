import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSlicingComponent } from './ui-slicing.component';

describe('UiSlicingComponent', () => {
  let component: UiSlicingComponent;
  let fixture: ComponentFixture<UiSlicingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSlicingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSlicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
