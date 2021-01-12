import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shopping } from 'src/app/interface/shopping.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 cart: Shopping[] = []
  constructor(private cs: CartService) { }

  ngOnInit()  { 
   this.cs.getCart().subscribe(cart => { 
     this.cart =cart.map(shopping => { 
      return { 
        id: shopping.payload.doc.id, 
        ...shopping.payload.doc.data() as object, 
        name: shopping.payload.doc.data()['data']['name'],
        price: shopping.payload.doc.data()['data']['price'],
        photoUrl: shopping.payload.doc.data()['data']['photoUrl'],
        amountG: shopping.payload.doc.data()['data']['amount'],

      } 
    }) 
    console.log(this.cart);
    
   })
  }

  delete(index) { 
    this.cs.delete(this.cart[index].id)
  } 

  save(index) { 
    this.cs.save(this.cart[index].id, this.cart[index].amount );
   
  }
}
