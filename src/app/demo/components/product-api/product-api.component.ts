import { Component } from '@angular/core';
import {ProductApiService} from "../../services/product-api.service";
import {Product} from "@models";

@Component({
  selector: 'app-product-api',
  templateUrl: './product-api.component.html',
  styleUrls: ['./product-api.component.scss']
})
export class ProductApiComponent {

  products?: Product[];

  constructor(private readonly $productServ: ProductApiService) {
    this.$productServ.getAll().subscribe(response => this.products = response)
  }

}
