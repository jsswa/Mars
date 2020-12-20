import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetmarsvideosService {

  constructor(private HttpClient: HttpClient) { }
  getVideo(api_url): Observable<any> {
    return this.HttpClient
      .get<any>(api_url);
  }
}
