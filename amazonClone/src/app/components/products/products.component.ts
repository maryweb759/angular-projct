import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 @Input() products: any[];
  constructor(private shooping: ShoppingCartService) { }

  ngOnInit(): void {
  }
 addToCart(p) { 
  this.shooping.addProduct(p)
 }
}
