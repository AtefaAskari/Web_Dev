import { NgModule } from '@angular/core';
import {Routes, RouterModule  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './albums/photos/photos.component';
import { DetailComponent } from './albums/detail/detail.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent, data: { title: 'Home' } },
//   { path: 'about', component: AboutComponent, data: { title: 'About' } },
//   { path: 'albums', component: AlbumsComponent, data: { title: 'Albums' } },
//   { path: 'albums/photos', component: PhotosComponent, data: { title: 'Photos' } },
//   { path: 'albums/detail', component: DetailComponent, data: { title: 'Detail' } }, 
// ];

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AlbumsComponent } from './albums/albums.component';
// import { AlbumDetailComponent } from './album-detail/album-detail.component';

// const routes: Routes = [
//   { path: 'albums', component: AlbumsComponent },
//   { path: 'albums/:id', component: AlbumDetailComponent } // Assuming you have a separate component for album detail
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'albums/detail/:id', component: DetailComponent},
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent,  title: 'About' },
  { path: 'albums', component: AlbumsComponent,  title: 'Albums' },
  { path: 'albums/photos', component: PhotosComponent, title: 'Photos' },
  { path: 'albums/detail', component: DetailComponent, title: 'Detail'  },
  {path: '**', redirectTo: 'home'}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


