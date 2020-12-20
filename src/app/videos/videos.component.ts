import { Component, OnInit } from '@angular/core';
import {GetmarsvideosService} from '../services/getmarsvideos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private GetMarsVideosService: GetmarsvideosService) { }
  videos: any[]
  api_url ='https://images-api.nasa.gov/search?q=mars&media_type=video'


  ngOnInit(): void {
    this.GetMarsVideosService.getVideo(this.api_url).subscribe(
      (response)=> {
        response.collection.items.forEach(item => {
          this.videos.push(item[0])
        });

      },
      (error)=>{console.log('erreur!:' +error);
      }

    )
  }


}
