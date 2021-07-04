import { Component, DoCheck, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { WishlistService } from './wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit , DoCheck {
  constructor(private shoppingCartService: ShoppingCartService, private wishlistService:WishlistService) { }
  wishList:any[] = [];

  cartList: any[];

  ngOnInit(): void {
    this.wishlistService.getWishListProductFromFirebase();
    this.cartList = this.shoppingCartService.getCartItem();
    this.wishList = this.wishlistService.getWishListItem();
  }
  ngDoCheck(){
  this.wishList = this.wishlistService.getWishListItem();
  }

  wishlistDropdown=false;
   
 

  dropdownToggler() {
      this.wishlistDropdown = !this.wishlistDropdown;
    }
  
  

  stockStatusMapping: any = {
    'out of stock': 'out of stock',
  }

  getStockStatus(status: string) {
    status = String(status).toLowerCase();
    return (status == this.stockStatusMapping[status]) ? true : false
  }

  onDeleteItem(id:any, index: number) {
    this.cartList.splice(index,1)
   this.wishlistService.deleteWishListItem(id,index)
  }


  isCartItem(itemId:any) {
    if (this.cartList.some(obj => obj.id === itemId)) {
      return true;
    }
    else {
      return false;
    }
  }

  onAddItemToCart(item:any){
    this.shoppingCartService.onaddItemToCart(item.id)
  }
}
