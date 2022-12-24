import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];

  constructor(private productDataService: ProductDataService) {}

  ngOnInit(): void {
    this.productDataService.getData().subscribe((res) => {
      this.productList = res;
    });
  }
}
