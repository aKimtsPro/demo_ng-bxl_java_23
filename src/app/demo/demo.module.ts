import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './components/directives/directives.component';
import {FormsModule} from "@angular/forms";
import {DemoRoutingModule} from "./demo-routing.module";
import { HighlightDirective } from './directives/highlight.directive';
import { CommComponent } from './components/comm/comm.component';
import { ChildComponent } from './components/comm/child/child.component';
import { C1Component } from './components/service/c1/c1.component';
import { C2Component } from './components/service/c2/c2.component';
import {NumberService} from "./services/number.service";



@NgModule({
  declarations: [
    DirectivesComponent,
    HighlightDirective,
    CommComponent,
    ChildComponent,
    C1Component,
    C2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
  ],
  providers: [
    NumberService
  ]
})
export class DemoModule { }
