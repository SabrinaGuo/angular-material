import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBookstoryInputComponent } from './ui-bookstory-input.component';

describe('UiBookstoryInputComponent', () => {
  let component: UiBookstoryInputComponent;
  let fixture: ComponentFixture<UiBookstoryInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiBookstoryInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBookstoryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
