import { Component, OnInit } from '@angular/core';
import { PaymentInformationService } from '../payment-information.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  name: string = '';
  address: string = '';
  cardNumber: string = '';
  cart: Product[] = [];

  constructor(private router: Router, private paymentInformationService: PaymentInformationService, private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  submitForm() {
    // set payment information
    this.paymentInformationService.setPaymentInformation(this.name, this.address, this.cardNumber);

    // save order

    // clear cart
    this.cartService.clearCart();
    this.cart = []; //?

    // clear form
    this.name = '';
    this.address = '';
    this.cardNumber = '';

    // route to confirmation page
    this.router.navigate(['/confirmation']);

  }

}
