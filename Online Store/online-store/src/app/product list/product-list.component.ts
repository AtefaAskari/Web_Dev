// product-list.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() categories: any[] | undefined;
  selectedCategory: any;

  selectCategory(category: any) {
    this.selectedCategory = category;
  }
}
