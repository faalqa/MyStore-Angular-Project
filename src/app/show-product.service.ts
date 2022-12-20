import { Injectable } from '@angular/core';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShowProductService {

  product: Product = new Product;

  constructor() { }

  getProduct() {
    return this.product;
  }

  setProduct(product: Product) {
    this.product = product;
  }
}
