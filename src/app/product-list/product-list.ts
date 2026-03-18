import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductService, Product } from '../services/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef // 👈 DODANE
  ) {}

  ngOnInit() {
    console.log("INIT DZIALA");

    this.productService.getAll().subscribe({
      next: data => {
        console.log("DATA:", data);

        this.products = data;

        this.cdr.detectChanges(); // 🔥 KLUCZOWA LINIJKA
      },
      error: err => console.error(err)
    });
  }
}