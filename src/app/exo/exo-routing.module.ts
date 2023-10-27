import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChronometreComponent} from "./components/chronometre/chronometre.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";

const routes: Routes = [
  { path: 'pipe', component: ChronometreComponent },
  { path: 'comm', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
