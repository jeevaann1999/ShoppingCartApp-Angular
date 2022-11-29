import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddShoppingcartComponent } from './add-shoppingcart/add-shoppingcart.component';
import { ViewShoppingcartComponent } from './view-shoppingcart/view-shoppingcart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"

const myRoute:Routes=[
  {path:"",
  component:AddShoppingcartComponent
  },
  {path:"view",
  component:ViewShoppingcartComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddShoppingcartComponent,
    ViewShoppingcartComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
