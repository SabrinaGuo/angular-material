import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSlicingIndexComponent } from './ui-slicing-index.component';

describe('UiSlicingIndexComponent', () => {
  let component: UiSlicingIndexComponent;
  let fixture: ComponentFixture<UiSlicingIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSlicingIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSlicingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
