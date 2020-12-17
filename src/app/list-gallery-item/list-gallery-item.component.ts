import {Component, Input, OnInit} from '@angular/core';
import { MeilleurePhotosComponent} from '../meilleure-photos/meilleure-photos.component';

@Component({
  selector: 'app-list-gallery-item',
  templateUrl: './list-gallery-item.component.html',
  styleUrls: ['./list-gallery-item.component.css']
})
export class ListGalleryItemComponent implements OnInit {

  @Input() marsId;
  @Input() marsPhoto;
  constructor(private MeilleurePhotosComponent: MeilleurePhotosComponent) { }

  ngOnInit(): void {
  }

  sendData(){
    this.MeilleurePhotosComponent.clickToRemove(this.marsId);  }

}
