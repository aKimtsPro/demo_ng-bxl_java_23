import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DirectivesComponent} from "./components/directives/directives.component";
import {CommComponent} from "./components/comm/comm.component";
import {C1Component} from "./components/service/c1/c1.component";
import {C2Component} from "./components/service/c2/c2.component";
import {PhraseComponent} from "./components/phrase/phrase.component";
import {FormsComponent} from "./components/forms/forms.component";
import {OddGuard} from "./guard/odd.guard";

const routes: Routes = [
  { path: 'directive', component: DirectivesComponent },
  { path: 'comm', component: CommComponent },
  { path: 'service1', component: C1Component },
  { path: 'service2', component: C2Component },
  { path: 'phrase/:index', component: PhraseComponent, canActivate: [OddGuard] },
  { path: 'forms', component: FormsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
