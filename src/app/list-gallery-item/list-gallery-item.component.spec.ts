import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGalleryItemComponent } from './list-gallery-item.component';

describe('ListGalleryItemComponent', () => {
  let component: ListGalleryItemComponent;
  let fixture: ComponentFixture<ListGalleryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGalleryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
