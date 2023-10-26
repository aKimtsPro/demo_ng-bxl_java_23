import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChronometreComponent } from './components/chronometre/chronometre.component';
import {ExoRoutingModule} from "./exo-routing.module";
import { ChronoFormatPipe } from './pipes/chrono-format.pipe';



@NgModule({
  declarations: [
    ChronometreComponent,
    ChronoFormatPipe
  ],
  imports: [
    CommonModule,
    ExoRoutingModule
  ]
})
export class ExoModule { }
