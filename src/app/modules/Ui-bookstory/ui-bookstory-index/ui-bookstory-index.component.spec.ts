import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBookstoryIndexComponent } from './ui-bookstory-index.component';

describe('UiBookstoryIndexComponent', () => {
  let component: UiBookstoryIndexComponent;
  let fixture: ComponentFixture<UiBookstoryIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiBookstoryIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBookstoryIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
