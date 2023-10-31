import { Injectable } from '@angular/core';
import {Product} from "@models";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = []

  constructor() { }

  add(product : Product) {
    this.products.push(product);
  }

  getAll(){
    return [...this.products];
  }

}
