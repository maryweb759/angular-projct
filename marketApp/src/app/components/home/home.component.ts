import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { good } from 'src/app/interface/good.interface';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
 goods:good[] = [];
goodsObservable: Subscription;
add: number = -1;

 
  constructor(private gs: GoodsService, private cs: CartService, private as: AuthService, private router: Router) { }

  ngOnInit(): void {
   this.goodsObservable = this.gs.getAllGoods().subscribe(data => { 
      this.goods = data.map(element => { 
        return { 
          id: element.payload.doc.id, 
          name: element.payload.doc.data()['name'], 
          price: element.payload.doc.data()['price'], 
          photoUrl: element.payload.doc.data()['photoUrl'], 

        }
      })
     })
  } 

  ngOnDestroy() { 
   this.goodsObservable.unsubscribe()
  }

  addToCart(index) { 
  if (this.as.userId) { 
    this.add = +index;
  } else { 
    this.router.navigate(['/login'])
  }
  } 

  buy(amount) { 
    let selectedGoods = this.goods[this.add]; 
    let data = { 
      name : selectedGoods.name,
      amount : +amount,
      price : selectedGoods.price,
      photoUrl: selectedGoods.photoUrl
    } 
    this.cs.addToCart(data).then(() => this.add = -1)
  }

}
