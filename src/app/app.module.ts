import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddShoppingcartComponent } from './add-shoppingcart/add-shoppingcart.component';
import { ViewShoppingcartComponent } from './view-shoppingcart/view-shoppingcart.component';

@NgModule({
  declarations: [
    AppComponent,
    AddShoppingcartComponent,
    ViewShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
