import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-photos-gallery',
  templateUrl: './my-photos-gallery.component.html',
  styleUrls: ['./my-photos-gallery.component.css']
})
export class MyPhotosGalleryComponent implements OnInit {
  @Input() gallery;
  constructor() { }

  ngOnInit(): void {
  }

}
