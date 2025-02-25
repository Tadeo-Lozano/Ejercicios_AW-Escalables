import { Component, input } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() product!: Product; // Recibe el producto del padre
}
