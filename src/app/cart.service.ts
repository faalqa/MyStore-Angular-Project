import { Injectable } from '@angular/core';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Product[] = [];
  totalAmount: number = 0;

  constructor() { }

  getCart() {
    return this.cartItems;
  }

  addToCart(product: Product) {
    this.cartItems.push(product);
    return this.cartItems;
  }

  removeProduct(product: Product) {
    this.cartItems = this.cartItems.filter(p => p.id !== product.id);
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.totalAmount = 0;
    return this.cartItems;
  }

  getTotalAmount() {
    this.totalAmount = 0;
    this.cartItems.forEach(element => {
      this.totalAmount += (element.price * element.quantity);
    });
    return this.totalAmount;
  }
}
