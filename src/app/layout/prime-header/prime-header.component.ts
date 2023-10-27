import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

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
        }
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
        }
      ]
    }
  ]


}
