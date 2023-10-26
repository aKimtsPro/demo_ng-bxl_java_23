import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild} from '@angular/core';
import {Link} from "../../shared/models/link.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit{

  @ViewChild('submenu') submenuList!: ElementRef;

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
          children: [
            {
              title: '1',
              url: '/demo/directive'
            },
            {
              title: '2',
              url: '/demo/directive'
            },
            {
              title: '3',
              url: '/demo/directive'
            },
          ]
        },
        {
          title: 'directives',
          children: [
            {
              title: '1',
              url: '/demo/directive'
            },
            {
              title: '2',
              url: '/demo/directive'
            },
            {
              title: '3',
              url: '/demo/directive'
            },
          ]
        }
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

  ngAfterViewInit(): void {

  }




}
