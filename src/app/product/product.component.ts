import { Component, OnInit } from '@angular/core';
import { ShowProductService } from '../show-product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = new Product;

  constructor(private showProductService: ShowProductService) {}

  ngOnInit(): void {
    this.product = this.showProductService.getProduct();
  }

}
