import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentFormComponent } from './payment-form/payment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductItemComponent,
    CartComponent,
    ConfirmationPageComponent,
    ProductComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
