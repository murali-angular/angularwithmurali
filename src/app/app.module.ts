import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details/product-details.component';
import { CartComponent } from './cart/cart/cart.component';
import { RouterModule } from '@angular/router';
import { ShippingComponent } from './shipping/shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
       {path: '', component: ProductListComponent},
       {path:'products/:productId',component: ProductListComponent},
       {path:'cart', component: CartComponent},
       {path:'shipping',component:ShippingComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
