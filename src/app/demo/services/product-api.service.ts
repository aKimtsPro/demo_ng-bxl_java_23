import { Injectable } from '@angular/core';
import {Product} from "@models";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ProductApiService {

  constructor(private client: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.client.get<Product[]>('http://localhost:3000/products')
  }

  getOne(id: number): Observable<Product>{
    return this.client.get<Product>('http://localhost:3000/products/'+id)
  }

  create(product: Product): Observable<Product>{
    return this.client.post<Product>('http://localhost:3000/products', product);
  }

}
