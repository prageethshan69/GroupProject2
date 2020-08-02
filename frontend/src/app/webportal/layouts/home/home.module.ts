import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { IncludeModule } from '../../includes/include.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatSelectModule } from '@angular/material';
import { WelcomeComponent } from '../../modules/welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShopComponent } from '../../modules/shop/shop.component';
import { CustomerLoginComponent } from '../../modules/customer-login/customer-login.component';
import { CustomerRegisterComponent } from '../../modules/customer-register/customer-register.component';
import { WasteRequestComponent } from '../../modules/waste-request/waste-request.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../../modules/cart/cart.component';
import { ProductDetailsComponent } from '../../modules/product-details/product-details.component';
import { WptermsComponent } from '../../modules/wpterms/wpterms.component';
import { TermDetailsComponent } from '../../modules/term-details/term-details.component';
import { CustomerLogoutComponent } from '../../modules/customer-logout/customer-logout.component';
import { ShowEventComponent } from '../../modules/show-event/show-event.component';
import { EventDetailsComponent } from '../../modules/show-event/event-details/event-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    ShopComponent,
    CustomerLoginComponent,
    CustomerRegisterComponent,
    WasteRequestComponent,
    CartComponent,
    ProductDetailsComponent,
    WptermsComponent,
    TermDetailsComponent,
    CustomerLogoutComponent,
    ShowEventComponent,
    EventDetailsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    IncludeModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
  ],
})
export class HomeModule {}
