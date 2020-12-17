import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImagesItemComponent } from './list-images-item.component';

describe('ListImagesItemComponent', () => {
  let component: ListImagesItemComponent;
  let fixture: ComponentFixture<ListImagesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListImagesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListImagesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
