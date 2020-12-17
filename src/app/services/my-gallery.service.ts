import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyGalleryService {

  constructor() { }
  addPhoto(marsId, marsPhoto){
    localStorage.setItem(marsId, marsPhoto);
  }

  removePhoto(marsId){
    localStorage.removeItem(marsId);
  }
}
