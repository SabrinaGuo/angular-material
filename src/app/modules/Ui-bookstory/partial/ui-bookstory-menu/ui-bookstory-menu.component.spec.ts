import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBookstoryMenuComponent } from './ui-bookstory-menu.component';

describe('UiBookstoryMenuComponent', () => {
  let component: UiBookstoryMenuComponent;
  let fixture: ComponentFixture<UiBookstoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiBookstoryMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBookstoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
