import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cart: Product[] = [];
  // amount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    // this.amount = this.cartService.getTotalAmount();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cart = [];
    alert('Your Cart is cleard!')
  }

}
