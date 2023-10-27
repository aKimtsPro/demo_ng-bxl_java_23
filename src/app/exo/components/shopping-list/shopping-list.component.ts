import { Component } from '@angular/core';
import {CartItem, Product} from "@models";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'sofa',
      price: 300
    },
    {
      id: 2,
      name: 'chair',
      price: 50
    },
    {
      id: 3,
      name: 'table',
      price: 1000
    },
  ];

  cart: CartItem[] = [];

  addToCart(product: Product){
    const item = this.cart.filter((element) => element.id == product.id)[0]

    if( item ){
      item.qtt++
    }
    else {
      this.cart.push({
        ...product,
        qtt: 1
      })
    }
  }

  removeFromCart(productId: number, qtt?: number){
    const product = this.cart.filter(item=> item.id == productId)[0];

    if( qtt ){
      product.qtt -= qtt;
    }

    if( !qtt || product.qtt <= 0 ) {
      const productIndex = this.cart.indexOf( product );
      this.cart.splice( productIndex, 1 );
    }
  }

}
