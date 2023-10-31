import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChronometreComponent} from "./components/chronometre/chronometre.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";
import {ListComponent} from "./components/products/list/list.component";
import {CartComponent} from "./components/products/cart/cart.component";
import {ExoComponent} from "./exo.component";

const routes: Routes = [
  {
    path: '',
    component: ExoComponent,
    children: [
      { path: 'pipe', component: ChronometreComponent },
      { path: 'comm', component: ShoppingListComponent },
    ]
  }
  // { path: 'product/list', component: ListComponent },
  // { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
