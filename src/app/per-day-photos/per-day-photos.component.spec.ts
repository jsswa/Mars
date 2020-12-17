import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerDayPhotosComponent } from './per-day-photos.component';

describe('PerDayPhotosComponent', () => {
  let component: PerDayPhotosComponent;
  let fixture: ComponentFixture<PerDayPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerDayPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerDayPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
