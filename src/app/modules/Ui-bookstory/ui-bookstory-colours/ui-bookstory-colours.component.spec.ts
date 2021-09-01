import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBookstoryColoursComponent } from './ui-bookstory-colours.component';

describe('UiBookstoryColoursComponent', () => {
  let component: UiBookstoryColoursComponent;
  let fixture: ComponentFixture<UiBookstoryColoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiBookstoryColoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBookstoryColoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
