import { Component, OnInit, Input } from '@angular/core';
import { PerDayPhotosComponent } from '../per-day-photos/per-day-photos.component';
import {MyGalleryService} from '../services/my-gallery.service';

@Component({
  selector: 'app-list-images-item',
  templateUrl: './list-images-item.component.html',
  styleUrls: ['./list-images-item.component.css']
})
export class ListImagesItemComponent implements OnInit {
  @Input() marsId;
  @Input() marsPhoto;
  constructor(private PerDayPhotosComponent : PerDayPhotosComponent) { }

  ngOnInit() {
  }
  sendData(){
    this.PerDayPhotosComponent.clickToAdd(this.marsId,this.marsPhoto);  }
}
