import { Component, OnInit } from '@angular/core';
import { ShowProductService } from '../show-product.service';
import { Product } from '../models/Product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product;

  constructor(private showProductService: ShowProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.product = this.showProductService.getProduct();
  }

  increase(product: Product) {
    product.quantity += 1;
    return product;
  }

  decrease(product: Product) {
    if (product.quantity > 1) {
      product.quantity -= 1;
    }
    return product;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert('Product ' + product.name + ' is added to your cart');
  }
}
