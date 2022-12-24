import { Injectable } from '@angular/core';
import { Payment } from './models/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentInformationService {
  payment: Payment = new Payment;

  constructor() {}

  getPaymentInformation(): Payment {
    return this.payment;
  }

  setPaymentInformation(name: string, address: string, cardNumber:string, amount: number) {
    this.payment.setName(name);
    this.payment.setAddress(address);
    this.payment.setCardNumber(cardNumber);
    this.payment.setAmount(amount);
  }

  setPayment(payment: Payment) {
    this.payment = payment;
  }
}
