import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { IvyCarouselModule} from 'angular-responsive-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileMenuComponent } from './core/header/mobile-menu/mobile-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewArrivalsComponent } from './core/home/new-arrivals/new-arrivals.component';
import { UIComponentsModule } from './ui-components/ui-components.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistService } from './wishlist/wishlist.service';
import { ClickOutsideModule } from 'ng-click-outside';
import { LogInComponent } from './core/log-in/log-in.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailService } from './product-detail/product-detail.service';
import { TimeAgoPipe } from 'time-ago-pipe';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { CurrencyPipe } from '@angular/common';
import { ProductListGrid3Component } from './product-listing/product-list-grid3/product-list-grid3.component';
import { ProductListToolboxComponent } from './product-listing/product-list-toolbox/product-list-toolbox.component';
import { ProductListGrid4Component } from './product-listing/product-list-grid4/product-list-grid4.component';
import { ProductListRowComponent } from './product-listing/product-list-row/product-list-row.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductListingService } from './product-listing/product-listing.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import * as _angular_ from "angular";
import { ProductService } from './ui-components/product/product.service';
@Pipe({
    name: 'timeAgo',
    pure: false
})
export class TimeAgoExtendsPipe extends TimeAgoPipe {}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MobileMenuComponent,
    NewArrivalsComponent,
    ShoppingCartComponent,
    WishlistComponent,
    LogInComponent,
    ProductDetailComponent,
    TimeAgoExtendsPipe,
    ProductListingComponent,
    ProductListGrid3Component,
    ProductListToolboxComponent,
    ProductListGrid4Component,
    ProductListRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    UIComponentsModule,
    IvyCarouselModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgxNumberSpinnerModule,
    ClickOutsideModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    ShoppingCartService,
    WishlistService,
    ProductDetailService, 
    CurrencyPipe,
    ProductListingService,
    ProductService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
