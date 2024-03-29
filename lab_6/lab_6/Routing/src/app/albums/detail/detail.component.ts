
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { AlbumServiceService } from 'src/app/album-service.service';

// @Component({
//   selector: 'app-detail',
//   templateUrl: './detail.component.html',
//   styleUrls: ['./detail.component.css']
// })
// export class DetailComponent implements OnInit {
//   albumId!: number ;
//   album: any;

//   constructor(private route: ActivatedRoute,
//               private router: Router, 
//               private albumService: AlbumServiceService) { }

//   ngOnInit(): void {
//     // Retrieve album ID from route parameters
//     this.route.params.subscribe(params => {
//       this.albumId = +params['id']; // Ensure albumId is parsed as a number
//       // Fetch album details using the album ID
//       this.albumService.getAlbumById(this.albumId).subscribe(album => {
//         this.album = album;
//       });
//     });
//   }

//   saveChanges(): void {
//     // Call the service method to update the album title
//     // Assuming you have a method in your service for updating the album
//     this.albumService.updateAlbumTitle(this.albumId, this.album.title).subscribe(() => {
//       console.log('Title updated successfully');
//     }, error => {
//       console.error('Error updating title:', error);
//     });
//   }

//   goBack(): void {
//     this.router.navigate(['/']); // Navigate back to home page
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumServiceService } from 'src/app/album-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  albumId!: number;
  album: any;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private albumService: AlbumServiceService) { }

  ngOnInit(): void {
    // Retrieve album ID from route parameters
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];
      // Fetch album details using the album ID
      this.albumService.getAlbumById(this.albumId).subscribe(album => {
        this.album = album;
      });
    });
  }

  saveChanges(): void {
    // Call the service method to update the album title
    // Assuming you have a method in your service for updating the album
    this.albumService.updateAlbumTitle(this.albumId, this.album.title).subscribe(() => {
      console.log('Title updated successfully');
    }, (error: any) => { // Explicitly specify the type of error as 'any'
      console.error('Error updating title:', error);
    });
  }

  goBack(): void {
    this.router.navigate(['/']); // Navigate back to home page
  }
}
