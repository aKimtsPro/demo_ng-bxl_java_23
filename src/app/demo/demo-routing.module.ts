import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DirectivesComponent} from "./components/directives/directives.component";
import {CommComponent} from "./components/comm/comm.component";

const routes: Routes = [
  { path: 'directive', component: DirectivesComponent },
  { path: 'comm', component: CommComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
