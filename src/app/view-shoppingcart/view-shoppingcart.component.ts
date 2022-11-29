import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-shoppingcart',
  templateUrl: './view-shoppingcart.component.html',
  styleUrls: ['./view-shoppingcart.component.css']
})
export class ViewShoppingcartComponent {


constructor(private api:ApiService){
  api.fetchProducts().subscribe(
    (response)=>{
      this.products=response;
    }
  )
}

products:any=[]
}
