import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import { AuthGardService as AuthGard } from './auth-gard.service';
import { UserService } from './user.service';
import { AdminAuthGaurdService as AdminAuthGaurd} from './admin-auth-gaurd.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule, 
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'products', component:ProductsComponent},
      {path:'shopping-cart', component:ShoppingCartComponent},
      {path:'check-out', component:CheckOutComponent,canActivate:[AuthGard] },
      {path:'order-success', component:OrderSuccessComponent,canActivate:[AuthGard]},
      {path:'login', component:LoginComponent},
      {path:'admin-products', component:AdminProductsComponent,canActivate:[AuthGard]},
      {path:'admin-products-new', component:ProductFormComponent,canActivate:[AuthGard]},
      {path:'admin-orders', component:AdminOrdersComponent,canActivate:[AuthGard,AdminAuthGaurd]},
      {path:'my-orders', component:MyOrdersComponent,canActivate:[AuthGard,AdminAuthGaurd]},
    ]),
     NgbModule,
  ],
  providers: [AuthService,
  AuthGard, UserService, AdminAuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
