import { Injectable } from '@angular/core';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Product[] = [];

  constructor() { }

  getCart() {
    return this.cartItems;
  }

  addToCart(product: Product) {
    this.cartItems.push(product);
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}
