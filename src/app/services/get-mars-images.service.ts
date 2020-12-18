import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetMarsImagesService {
  api_key='B32PShCTHcLa3fYsLsEzMuJwaWPewq03uTxGDS9u';
  api_url='https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=';


  constructor(private HttpClient: HttpClient) { }
  getImage(dayStamp){
    return this.HttpClient
      .get<any>(this.api_url+dayStamp+'&api_key='+ this.api_key);

  }
  getDayImage() {
    return this.HttpClient
      .get<any>(this.api_url+'2015-10-10'+'&api_key='+ this.api_key);
  }
}
