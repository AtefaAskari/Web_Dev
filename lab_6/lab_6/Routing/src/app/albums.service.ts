import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'your_api_url'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/albums`);
  }

  getAlbumById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/albums/${id}`);
  }

  // Implement other CRUD methods (create, update, delete) as needed
}
