import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChronometreComponent } from './components/chronometre/chronometre.component';
import {ExoRoutingModule} from "./exo-routing.module";
import { ChronoFormatPipe } from './pipes/chrono-format.pipe';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingCartComponent } from './components/shopping-list/shopping-cart/shopping-cart.component';
import {TableModule} from "primeng/table";
import { ListComponent } from './components/products/list/list.component';
import { CartComponent } from './components/products/cart/cart.component';
import {ButtonModule} from "primeng/button";

const PRIME_IMPORTS = [
  TableModule,
]

@NgModule({
  declarations: [
    ChronometreComponent,
    ChronoFormatPipe,
    ShoppingListComponent,
    ShoppingCartComponent,
    ListComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    ...PRIME_IMPORTS,
    ButtonModule
  ]
})
export class ExoModule { }
