import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pizza} from "../../../../shared/models/pizza.model";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input()
  pizza!: Pizza;

  @Output('pizzaSelected')
  dataCatapult = new EventEmitter<Pizza>();

  get realPrice(){
    if( !this.pizza.promo )
      return this.pizza.price

    const reduction = (this.pizza.price * this.pizza.promo) / 100
    return this.pizza.price - reduction
  }

  select(){
    this.dataCatapult.emit(this.pizza)
  }

}
