import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListGrid3Component } from './product-listing/product-list-grid3/product-list-grid3.component';
import { ProductListGrid4Component } from './product-listing/product-list-grid4/product-list-grid4.component';
import { ProductListRowComponent } from './product-listing/product-list-row/product-list-row.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'product-list-row', component: ProductListRowComponent },
  { path: 'product-listing', component: ProductListingComponent },
  { path: 'product-listing-grid3', component: ProductListGrid3Component },
  { path: 'product-listing-grid4', component: ProductListGrid4Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
