import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Product[]>('../../assets/data.json').subscribe((res) => {
      this.productList = res;
    });
  }
}
