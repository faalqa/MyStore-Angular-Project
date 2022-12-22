import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/Product';
import { PaymentInformationService } from '../payment-information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Product[] = [];
  name: string = '';
  address: string = '';
  cardNumber: string = '';
  amount: number = 0;

  constructor(private cartService: CartService, private router: Router, private paymentInformationService: PaymentInformationService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.amount = this.cartService.getTotalAmount();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cart = [];
    this.amount = 0;
    alert('Your Cart is cleard!')
  }

  increase(product: Product) {
    if (product.quantity < 10) {
      product.quantity += 1;
      this.amount += product.price;
    }
    return product;
  }

  decrease(product: Product) {
    if (product.quantity > 1) {
      product.quantity -= 1;
      this.amount -= product.price;
    }
    else if (product.quantity == 1) {
      this.removeProduct(product);
    }
    return product;
  }

  removeProduct(product: Product) {
    this.cart = this.cartService.removeProduct(product);
    this.amount -= product.price;
    alert('Product ' + product.name + ' is removed from your cart');
  }

  submitForm() {
    // set payment information
    this.paymentInformationService.setPaymentInformation(this.name, this.address, this.cardNumber, this.amount);

    // clear cart
    this.cartService.clearCart();
    this.cart = [];
    this.amount = 0;

    // route to confirmation page
    this.router.navigate(['/confirmation']);

  }

}
