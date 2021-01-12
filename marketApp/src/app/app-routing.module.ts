import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {index:0} },
  { path: 'login', component: LoginComponent , data: {index:2}},
  { path: 'signup', component: SignupComponent, data: {index:3} },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard], data: {index:4} },
  { path: 'admin', component: GoodsComponent, data: {index:5} },
  { path: 'account', component: AccountComponent, data: {index:6}  },
  { path: 'orders', component: OrdersComponent, data: {index:7}  },
  { path: '**', component: NotfoundComponent, data: {index:8} }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
