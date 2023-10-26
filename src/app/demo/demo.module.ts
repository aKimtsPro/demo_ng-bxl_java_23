import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './components/directives/directives.component';
import {FormsModule} from "@angular/forms";
import {DemoRoutingModule} from "./demo-routing.module";
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    DirectivesComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
