import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './components/directives/directives.component';
import {FormsModule} from "@angular/forms";
import {DemoRoutingModule} from "./demo-routing.module";
import { HighlightDirective } from './directives/highlight.directive';
import { CommComponent } from './components/comm/comm.component';
import { ChildComponent } from './components/comm/child/child.component';



@NgModule({
  declarations: [
    DirectivesComponent,
    HighlightDirective,
    CommComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
