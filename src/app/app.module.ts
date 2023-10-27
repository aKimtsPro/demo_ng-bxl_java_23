import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Page404Component } from './layout/page404/page404.component';
import {MenubarModule} from "primeng/menubar";
import { PrimeHeaderComponent } from './layout/prime-header/prime-header.component';

const PRIME_IMPORTS = [
  MenubarModule,
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    PrimeHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...PRIME_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
