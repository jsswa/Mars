import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPhotosGalleryComponent } from './my-photos-gallery.component';

describe('MyPhotosGalleryComponent', () => {
  let component: MyPhotosGalleryComponent;
  let fixture: ComponentFixture<MyPhotosGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPhotosGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPhotosGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
