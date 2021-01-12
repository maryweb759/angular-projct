import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { good } from 'src/app/interface/good.interface';
import { AuthService } from 'src/app/services/auth.service';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
 @ViewChild('image') image: ElementRef
  constructor(private gs: GoodsService, private as: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.as.userId == '') { 
      this.router.navigate(['/login'])
    }
  }
  addNewGood(form: NgForm) { 
    console.log(form.value);
    
    let name = (<good>form.value).name; 
    let price = (<good>form.value).price;
    let image = (<HTMLInputElement>this.image.nativeElement).files[0];
   this.gs.addNewGood(name, price, image).then(msg => console.log(msg))
   
  }
}
