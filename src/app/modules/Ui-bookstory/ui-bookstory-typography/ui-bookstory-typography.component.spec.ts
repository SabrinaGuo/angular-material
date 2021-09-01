import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBookstoryTypographyComponent } from './ui-bookstory-typography.component';

describe('UiBookstoryTypographyComponent', () => {
  let component: UiBookstoryTypographyComponent;
  let fixture: ComponentFixture<UiBookstoryTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiBookstoryTypographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBookstoryTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
