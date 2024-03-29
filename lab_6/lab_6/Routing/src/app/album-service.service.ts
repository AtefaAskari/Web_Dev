// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AlbumServiceService {
//   private apiUrl = 'https://jsonplaceholder.typicode.com/albums'; 

//   constructor(private http: HttpClient) { }

//   getAllAlbums(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl); 
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }


  ////////////////
    // Method to update album title by album ID
    updateAlbumTitle(albumId: number, title: string): Observable<any> {
      const url = `${this.apiUrl}/albums/${albumId}`; // Assuming API endpoint for updating album title
      return this.http.put(url, { title });
    }
    //////////////////
  

  getAllAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAlbumById(albumId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${albumId}`);
  }
}
