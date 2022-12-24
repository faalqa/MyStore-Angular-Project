import { Component, Output, EventEmitter } from '@angular/core';
import { Payment } from '../models/Payment';

interface PaymentData {
  name: string,
  address: string,
  cardNumber: string,
}

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {

  paymentData: PaymentData = {
    name: '',
    address: '',
    cardNumber: ''
  }
  

  nameErr: string = '';
  addressErr: string = '';
  cardErr: string = '';

  @Output() pay: EventEmitter<Payment> = new EventEmitter();


  submitForm() {
    const payment = new Payment();

    payment.setName(this.paymentData.name);
    payment.setAddress(this.paymentData.address);
    payment.setCardNumber(this.paymentData.cardNumber);

    this.pay.emit(payment);
  }

  nameValidate() {
    // name
    if (this.paymentData.name == '') {
      this.nameErr = 'Name can\'t be empty';
    } else if (this.paymentData.name.length < 3) {
      this.nameErr = 'Name should be at least 3 characters';
    } else {
      this.nameErr = '';
    }
  }

  addressValidate() {
    //address
    if (this.paymentData.address == '') {
      this.addressErr = 'Address can\'t be empty';
    } else if (this.paymentData.address.length < 6) {
      this.addressErr = 'Address should be at least 6 characters';
    } else {
      this.addressErr = '';
    }
  } 
  
  cardNumberValidate() {
    //card number
    if (this.paymentData.cardNumber == '') {
      this.cardErr = 'Card Number can\'t be empty';
    } else if (this.paymentData.cardNumber.length < 16) {
      this.cardErr = 'Card Number should be 16 characters';
    } else {
      this.cardErr = '';
    }
  }
}
