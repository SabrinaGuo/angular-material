import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBookstoryComponent } from './ui-bookstory.component';

describe('UiBookstoryComponent', () => {
  let component: UiBookstoryComponent;
  let fixture: ComponentFixture<UiBookstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiBookstoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBookstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
