import { Component } from '@angular/core';
import {Pizza} from "../../../shared/models/pizza.model";

@Component({
  selector: 'app-comm',
  templateUrl: './comm.component.html',
  styleUrls: ['./comm.component.scss']
})
export class CommComponent {

  pizzas: Pizza[] = [
    {
      name: 'margheritta',
      price: 5
    },
    {
      name: '4 Fromages',
      price: 15,
      promo: 20
    },
    {
      name: 'hawaï',
      price: 30
    },
  ]

  selectedPizza?: Pizza;

  onPizzaSelect(pizza: Pizza) {
    this.selectedPizza = pizza;
  }
}
