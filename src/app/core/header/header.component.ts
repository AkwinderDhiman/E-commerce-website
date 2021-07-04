import { Component,  ElementRef, EventEmitter, HostListener, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { ShoppingCart } from 'src/app/shopping-cart/shopping-cart.model';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { WishlistService } from 'src/app/wishlist/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , OnChanges {
  constructor(private shoppingCartService: ShoppingCartService, private wishlistservice:WishlistService) { }

  
  @ViewChild('menu') menuFocus?: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;
  toggleMobileMenu = false;
  searchToggle = false;
  hover = false
  @Output() mobileMenuClose = new EventEmitter();

  cartList = []
  
  wishList: any[]=[]

  ngOnInit() {
    // this.shoppingCartService.getCartProduct()
    this.cartList = this.shoppingCartService.getCartItem();
    this.wishList = this.wishlistservice.getWishListItem();
  }
ngOnChanges(){
}

  ngDoCheck() {
    this.cartList = this.shoppingCartService.getCartItem();
    this.wishList = this.wishlistservice.getWishListItem();
  }

  
  mobileMenuToggle() {
    this.toggleMobileMenu = !this.toggleMobileMenu;
    this.mobileMenuClose.emit(null);
  }

  toggleSearch() {
    this.searchToggle = !this.searchToggle;
    var focus = this.searchInput.nativeElement
    setTimeout(() => {// this will make the execution after the above boolean has changed;
      focus.focus();
    }, 0);

  }
  hoverToggle() {
    this.hover = !this.hover;
  }

  change(value: number): void {
    console.log(value);
  }


  /*shopping cart method & properties starts*/
  
   
  deleteListItem(id :any,index:any) {
    this.shoppingCartService.deleteListItem(id, index);
    this.cartList = this.shoppingCartService.getCartItem();
  }

  subTotal() {
    return Number(this.cartList.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0));
  }
  
   /*shopping cart method end*/
   isExpanded=false
   toggleCartListMenu(event:any){
   this.isExpanded = !this.isExpanded;
    
   }

   onFocusOutEvent(event: any){
    this.searchToggle=false;
   
  }
 

  onClickedOutside(event:any){
    this.isExpanded=false
  
  }
      
  }


