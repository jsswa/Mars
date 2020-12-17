import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleurePhotosComponent } from './meilleure-photos.component';

describe('MeilleurePhotosComponent', () => {
  let component: MeilleurePhotosComponent;
  let fixture: ComponentFixture<MeilleurePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeilleurePhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeilleurePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
