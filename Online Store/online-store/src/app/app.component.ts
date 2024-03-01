// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    {
      name: 'Electronics',
      products: [
        { name: 'Laptop', likes: 0 },
        { name: 'Smartphone', likes: 0 },
        { name: 'Headphones', likes: 0 },
        { name: 'Camera', likes: 0 },
        { name: 'Tablet', likes: 0 }
      ]
    },
    // Add more categories as needed
  ];
}
