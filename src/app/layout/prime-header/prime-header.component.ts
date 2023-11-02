import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {PanierService} from "../../exo/services/panier.service";

@Component({
  selector: 'app-prime-header',
  templateUrl: './prime-header.component.html',
  styleUrls: ['./prime-header.component.scss']
})
export class PrimeHeaderComponent {

  links: MenuItem[] = [
    {
      label: 'home',
      routerLink: 'home',
    },
    {
      label: 'demo',
      items: [
        {
          label: 'directives',
          routerLink: 'demo/directive'
        },
        {
          label: 'communication',
          routerLink: 'demo/comm'
        },
        {
          label: 'services',
          items: [
            {
              label: 'component 1',
              routerLink: 'demo/service1'
            },
            {
              label: 'component 2',
              routerLink: 'demo/service2'
            }
          ]
        },
        {
          label: 'reactive forms',
          routerLink: 'demo/forms'
        },
        {
          label: 'observables',
          routerLink: 'demo/obs'
        },
        {
          label: 'appel api',
          routerLink: 'demo/api'
        },
      ]
    },
    {
      label: 'exo',
      items: [
        {
          label: 'chronomètre(pipe)',
          routerLink: 'exo/pipe'
        },
        {
          label: 'shopping (comm)',
          routerLink: 'exo/comm'
        },
        {
          label: 'shopping (service)',
          items: [
            {
              label: 'list',
              routerLink: 'exo/product/list'
            },
            {
              label: 'cart',
              routerLink: 'exo/cart'
            }
          ]
        }
      ]
    }
  ]

  constructor(
    private readonly $panierServ: PanierService
  ) {}

  get total(){
    return this.$panierServ.total;
  }

}
