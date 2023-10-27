import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartItem} from "@models";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  @Input()
  cart!: CartItem[];

  @Output('removeOne')
  removeOneEmitter = new EventEmitter<number>();
  @Output('removeAll')
  removeAllEmitter = new EventEmitter<number>();

  removeOne(product: CartItem){
    this.removeOneEmitter.emit(product.id);
  }

  removeAll(product: CartItem) {
    this.removeAllEmitter.emit(product.id);
  }

}
