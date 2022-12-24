import { Injectable } from '@angular/core';
import { Product } from './models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  productList: Product[] = [];
  
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Product[]>('../assets/data.json');
  }
}
