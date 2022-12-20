import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ShowProductService } from '../show-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productList: Product[] = []

  constructor(private showProductService: ShowProductService, private router: Router) {}

  ngOnInit(): void {
    this.productList = [
      {
        id: 1,
        name: 'T-Shirt',
        price: 70,
        quantity: 1
      },
      {
        id: 2,
        name: 'Shoes',
        price: 150,
        quantity: 1
      },
      {
        id: 3,
        name: 'Bag',
        price: 100,
        quantity: 1
      },
      {
        id: 4,
        name: 'Jacket',
        price: 120,
        quantity: 1
      }
    ]
  }

  hideProductFunc(product: Product): void {
    this.productList = this.productList.filter(p => p.id !== product.id);
  }

  goToProduct(product: Product) {
    this.showProductService.setProduct(product);
    this.router.navigate(['product']);
  }
}
