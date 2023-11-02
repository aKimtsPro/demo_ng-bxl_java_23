import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './components/directives/directives.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DemoRoutingModule} from "./demo-routing.module";
import { HighlightDirective } from './directives/highlight.directive';
import { CommComponent } from './components/comm/comm.component';
import { ChildComponent } from './components/comm/child/child.component';
import { C1Component } from './components/service/c1/c1.component';
import { C2Component } from './components/service/c2/c2.component';
import {NumberService} from "./services/number.service";
import { PhraseComponent } from './components/phrase/phrase.component';
import { FormsComponent } from './components/forms/forms.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ObsAddComponent } from './components/observable/obs-add/obs-add.component';
import { ObsSumComponent } from './components/observable/obs-sum/obs-sum.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductApiComponent } from './components/product-api/product-api.component';
import {ProductApiService} from "./services/product-api.service";



@NgModule({
  declarations: [
    DirectivesComponent,
    HighlightDirective,
    CommComponent,
    ChildComponent,
    C1Component,
    C2Component,
    PhraseComponent,
    FormsComponent,
    ObservableComponent,
    ObsAddComponent,
    ObsSumComponent,
    ProductApiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    NumberService,
    ProductApiService,
  ]
})
export class DemoModule { }
