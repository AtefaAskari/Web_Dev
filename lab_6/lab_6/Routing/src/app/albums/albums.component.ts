// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-albums',
//   templateUrl: './albums.component.html',
//   styleUrls: ['./albums.component.css']
// })
// export class AlbumsComponent {

// }


import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from '../album-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = []; // Assuming you have albums array populated with the provided data

  constructor(private albumService: AlbumServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getAlbums() ;
  }

  getAlbums(): void {
    this.albumService.getAllAlbums() 
    .subscribe(albumService => this.albums = albumService); 
  }

  goBack(): void {
    this.router.navigate(['/']); 
  }

  viewDetail(albumId: number): void {
    this.router.navigate(['/albums/detail', albumId]); 
  }

  deleteAlbum(albumId: number): void {
    // Implement delete functionality here
    // Example: Filter out the album with the given ID
    this.albums = this.albums.filter(album => album.id !== albumId);
  }
}
