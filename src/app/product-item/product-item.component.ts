import { outputAst } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() hideProduct: EventEmitter<Product> = new EventEmitter;

  constructor(private cartService: CartService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      quantity: 1
    }
  }

  increase(product: Product) {
    product.quantity += 1;
    return product;
  }

  decrease(product: Product) {
    product.quantity -= 1;
    return product;
  }

  hide(product: Product) {
    this.hideProduct.emit(product);
    return product;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert('Product ' + product.name + ' is added to your cart');
  }
}
