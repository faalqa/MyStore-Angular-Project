import { Component, OnInit } from '@angular/core';
import { PaymentInformationService } from '../payment-information.service';
import { Payment } from '../models/Payment';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {

  payment: Payment = new Payment;

  constructor(private paymentInformationService: PaymentInformationService) {}

  ngOnInit(): void {
    this.payment = this.paymentInformationService.getPaymentInformation();
  }

}
