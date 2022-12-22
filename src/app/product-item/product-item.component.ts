import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../cart.service';
import { ShowProductService } from '../show-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  currentProduct: Product = new Product;

  constructor(private cartService: CartService, private showProductService: ShowProductService, private router: Router) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 1
    }
  }

  ngOnInit(): void {
    this.currentProduct = this.showProductService.getProduct();
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

  goToProduct(product: Product) {
    this.showProductService.setProduct(product);
    this.router.navigate(['product']);
  }
}
