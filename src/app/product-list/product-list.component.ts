import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ShowProductService } from '../show-product.service';
import { Router } from '@angular/router';
import data from '../../assets/data.json';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productList: Product[] = []

  constructor(private showProductService: ShowProductService, private router: Router) {}

  ngOnInit(): void {
    this.productList = data;
  }

  hideProductFunc(product: Product): void {
    this.productList = this.productList.filter(p => p.id !== product.id);
  }

  goToProduct(product: Product) {
    this.showProductService.setProduct(product);
    this.router.navigate(['product']);
  }
}
