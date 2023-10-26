import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild} from '@angular/core';
import {Link} from "../../shared/models/link.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  links: Link[] = [
    {
      title: 'home',
      url: 'home',
    },
    {
      title: 'demo',
      children: [
        {
          title: 'directives',
          url: 'demo/directive'
        },
        {
          title: 'communication',
          url: 'demo/comm'
        },
      ]
    },
    {
      title: 'exo',
      children: [
        {
          title: 'chronomètre(pipe)',
          url: 'exo/pipe'
        }
      ]
    }
  ]





}
