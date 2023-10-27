import { Component } from '@angular/core';
import {Product} from "@models";
import {PanierService} from "../../../services/panier.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

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

  constructor(
    private readonly $panierServ: PanierService
  ) {}

  ajouterAuPanier(produit: Product) {
    this.$panierServ.ajouterAuPanier(produit)
  }

}
