import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { article } from '../interface/interface';
import { Observable } from 'rxjs';
// import { article } from '../interface/interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'http://localhost:3000/products/';

  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get('http://localhost:3000/products');
  }

  createProduct(product: article): Observable<article> {
    return this.http.post<article>(this.url, product);
  }
  deleteProduct(id: number): Observable<article> {
    return this.http.delete<article>(this.url + id);
  }
}
