import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { CheckoutProductsComponent } from './components/checkout-products/checkout-products.component';
import { CheckoutSubtotalComponent } from './components/checkout-subtotal/checkout-subtotal.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    CheckoutComponent,
    FooterComponent,
    BannerComponent,
    ProductsComponent,
    CheckoutProductsComponent,
    CheckoutSubtotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    ReactiveFormsModule, 
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyDqRJgEDssMu-L1TmmoFmb9y0W5Sv0oAg0",
        authDomain: "clone-667f3.firebaseapp.com",
        projectId: "clone-667f3",
        storageBucket: "clone-667f3.appspot.com",
        messagingSenderId: "685525771444",
        appId: "1:685525771444:web:85bb20264e97ac1bcfa3e1",
        measurementId: "G-G749HLVWRD"
      })
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
