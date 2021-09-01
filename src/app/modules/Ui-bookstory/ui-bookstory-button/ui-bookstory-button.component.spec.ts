import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBookstoryButtonComponent } from './ui-bookstory-button.component';

describe('UiBookstoryButtonComponent', () => {
  let component: UiBookstoryButtonComponent;
  let fixture: ComponentFixture<UiBookstoryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiBookstoryButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBookstoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
