import { Component, OnInit } from '@angular/core';
import {MyGalleryService} from '../services/my-gallery.service';


@Component({
  selector: 'app-meilleure-photos',
  templateUrl: './meilleure-photos.component.html',
  styleUrls: ['./meilleure-photos.component.css']
})
export class MeilleurePhotosComponent implements OnInit {

  constructor(private MyGalleryService: MyGalleryService) { }

  maGallerie = [];

  ngOnInit() {
    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      console.log(key, value);
      this.maGallerie.push({'id':key, 'photo':value});
    }
  }
  clickToRemove(marsId){
    this.MyGalleryService.removePhoto(marsId);
  }

}
