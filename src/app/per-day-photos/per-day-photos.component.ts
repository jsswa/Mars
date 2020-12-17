import { Component, OnInit } from '@angular/core';
import {GetMarsImagesService} from '../services/get-mars-images.service';
import {MyGalleryService} from '../services/my-gallery.service';
@Component({
  selector: 'app-per-day-photos',
  templateUrl: './per-day-photos.component.html',
  styleUrls: ['./per-day-photos.component.css']
})
export class PerDayPhotosComponent implements OnInit {

  constructor(private GetMarsImagesService: GetMarsImagesService,
              private MyGalleryService: MyGalleryService){}
  mars: any[];
  date: any;


  ngOnInit(){
    console.log(localStorage);


  }
  getFromApi(){

    console.log(this.date);
    this.GetMarsImagesService.getImage(this.date).subscribe(
      (response)=> {
        console.log(response);
        this.mars=response.photos;
      },
      (error)=>{ console.log('erreur!:' +error);

      }
    );
  }
  clickToAdd(marsId, marsPhoto){
    this.MyGalleryService.addPhoto(marsId, marsPhoto);
  }

}
