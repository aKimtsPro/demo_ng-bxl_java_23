import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChronometreComponent } from './components/chronometre/chronometre.component';
import {ExoRoutingModule} from "./exo-routing.module";
import { ChronoFormatPipe } from './pipes/chrono-format.pipe';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingCartComponent } from './components/shopping-list/shopping-cart/shopping-cart.component';
import {TableModule} from "primeng/table";

const PRIME_IMPORTS = [
  TableModule,
]

@NgModule({
  declarations: [
    ChronometreComponent,
    ChronoFormatPipe,
    ShoppingListComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    ...PRIME_IMPORTS
  ]
})
export class ExoModule { }
