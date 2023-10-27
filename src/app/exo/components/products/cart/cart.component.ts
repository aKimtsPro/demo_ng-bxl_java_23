import { Component } from '@angular/core';
import {PanierService} from "../../../services/panier.service";
import {CartItem} from "@models";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  panier: CartItem[];

  constructor(
    private readonly $panierServ: PanierService
  ) {
    this.panier = $panierServ.panier;
  }

  get total() {
    return this.$panierServ.total;
  }

  retirerTout(item: CartItem){
    this.$panierServ.retirerDuPanier(item);
  }

  retirerUn(item: CartItem){
    this.$panierServ.retirerDuPanier(item, 1);
  }


}
