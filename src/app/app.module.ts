import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListImagesComponent } from './list-images/list-images.component';
import {FormsModule} from '@angular/forms';
import { ListImagesItemComponent } from './list-images-item/list-images-item.component';
import { HttpClientModule} from '@angular/common/http';
import { PerDayPhotosComponent } from './per-day-photos/per-day-photos.component';
import { RouterModule, Routes } from '@angular/router';
import { MeilleurePhotosComponent} from './meilleure-photos/meilleure-photos.component';
import { MyPhotosGalleryComponent } from './my-photos-gallery/my-photos-gallery.component';
import {MyGalleryService} from './services/my-gallery.service';
import { ListGalleryItemComponent } from './list-gallery-item/list-gallery-item.component';
import { VideosComponent } from './videos/videos.component';
import { ListVideosComponent } from './list-videos/list-videos.component';
import { VideosItemComponent } from './videos-item/videos-item.component';

const appRoutes: Routes = [

  { path: 'PerDayPhotos', component: PerDayPhotosComponent},
  { path: 'MeilleurePhotos', component: MeilleurePhotosComponent },
  { path: 'Videos', component: VideosComponent},

  { path: '',
    redirectTo: '/PerDayPhotos',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ListImagesComponent,
    ListImagesItemComponent,
    PerDayPhotosComponent,
    MeilleurePhotosComponent,
    MyPhotosGalleryComponent,
    ListGalleryItemComponent,
    VideosComponent,
    ListVideosComponent,
    VideosItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [MyGalleryService],
  bootstrap: [AppComponent]

})
export class AppModule { }
