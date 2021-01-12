import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public shopping_cart: ShoppingCartService, public auth: AuthService ) { }

  ngOnInit(): void {
  }
  signout() { 
    this.auth.logOut()
  }
}
