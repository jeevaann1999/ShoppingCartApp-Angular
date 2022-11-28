import { Component } from '@angular/core';

@Component({
  selector: 'app-add-shoppingcart',
  templateUrl: './add-shoppingcart.component.html',
  styleUrls: ['./add-shoppingcart.component.css']
})
export class AddShoppingcartComponent {
productTitle=""
productImage=""
description=""
rate=""
sellerName=""
quantity=""

readValues=()=>{
  let data:any={
    "productTitle":this.productTitle,
    "productImage":this.productImage,
    "description":this.description,
    "rate":this.rate,
    "sellerName":this.sellerName,
    "quantity":this.quantity
  }
  console.log(data)
}
}
