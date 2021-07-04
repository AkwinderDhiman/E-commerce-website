import { Component, OnInit, DoCheck, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductListingService } from '../product-listing/product-listing.service';
import { ShoppingCartService } from './shopping-cart.service';
const CART_STORAGE_KEY = 'MY_CART'
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, DoCheck , OnChanges {
  constructor(private shoppingCartService: ShoppingCartService,
    private formBuilder: FormBuilder,
    private productListService: ProductListingService,
    private afs: AngularFirestore) {
     
     }

  freeShipping = '0.00'
  Standart = '10.00'
  Express = '20.00'


  shippingForm: FormGroup

  @ViewChild('n') spinnerValue: ElementRef<any>
  cartList = []
  cartItems = this.shoppingCartService.cart.value;
  ngDoCheck() {
    this.cartList = this.shoppingCartService.getCartItem();
   }
ngOnChanges(){
}
  ngOnInit() {
  
    this.shippingForm = this.formBuilder.group({
      shippingCost: [this.freeShipping, [Validators.required]]
    });
    this.shoppingCartService.getCartProductFromFirebase();
    this.cartList = this.shoppingCartService.cartList;
   
  }


  getTotal() {
    return Number(this.shippingForm.controls.shippingCost.value);

  }

  deleteListItem(id: any, index: any) {
    this.shoppingCartService.deleteListItem(id, index);
    this.cartList = this.shoppingCartService.getCartItem();
  }

  onInputSpinnerChange(value: any, item: any) {
    this.shoppingCartService.onInputSpinnerChange(value, item)
  }

  subTotal() {
    return Number(this.cartList.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0));

  }

  onUpdate() {
    this.cartList = this.shoppingCartService.getCartItem()
  }

}