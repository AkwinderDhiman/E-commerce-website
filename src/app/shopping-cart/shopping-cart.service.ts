

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ShoppingCart } from './shopping-cart.model'
import firebase from 'firebase/app'
import { BehaviorSubject } from 'rxjs';
import { ProductListingService } from '../product-listing/product-listing.service';
import { Storage } from "@capacitor/storage"
const CART_STORAGE_KEY = 'MY_CART'
// const { Storage } = Plugins;

const INCREMENT = firebase.firestore.FieldValue.increment(1);
const DECREMENT = firebase.firestore.FieldValue.increment(-1);
@Injectable()
export class ShoppingCartService {
  cart = new BehaviorSubject({})
  productCart=[];
  productListCart= [];
  cartList = []


  
  constructor(private afs: AngularFirestore,
   private productListService:ProductListingService) {
    this.getCartProductFromFirebase();
    this.loadCart();
  }

  getCartItem() {
    if(this.cartList.length<1){
      this.getCartProductFromFirebase();
    }
    return this.cartList.slice();
  }

  cartKey = null
  async loadCart() {
    const result = await Storage.get({ key: CART_STORAGE_KEY });
    console.log('Cart From Storage ', result);
    if (result.value) {
      this.cartKey = result.value;
      this.afs.collection('cart-list').doc(this.cartKey).valueChanges().subscribe((result: any) => {
        delete result['lastUpdate'];
        this.cart.next(result || {});
      })
    }

    else {
      const fbDocument = await this.afs.collection('cart-list').add({
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
      });
      this.cartKey = fbDocument.id;
      await Storage.set({ key: CART_STORAGE_KEY, value: this.cartKey });
    }
  }


  deleteListItem(id: any , index:any) {
    this.cartList.splice(index,1)
    this.afs.collection('cart-list').doc(this.cartKey).update({
      id: firebase.firestore.FieldValue.delete(),
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });

    



    
  
  }

  onaddItemToCart(id: any) {
    this.afs.collection('cart-list').doc(this.cartKey).update({
       id: id,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });
    this.getCartProductFromFirebase();
  }


  onInputSpinnerChange(value: any, item: any) {
    item.quantity = value
 
  }

   getCartProductFromFirebase(){
    this.productListService.getProductsFirebase()
    .subscribe((allProducts: any[]) => {
       this.cartList = allProducts.filter(p => {
        if (this.cart.value[p.id]) {
          return p;
        };
      });
       console.log('cartList ', this.cartList);
    })
    // this.productService.getProductsFirebase()
    // .subscribe((allProducts: any[]) => {
    //    this.cartList = allProducts.filter(p => {
    //     if (this.cart.value[p.id]) {
    //       return p
    //     }
    //   });
    
    // })
    // if(this.productCart.length>=1 || this.productListCart.length>=1){
    //   this.cartList = this.productListCart.concat(this.productCart)
    //   console.log('cartList ', this.cartList)
    // }
   }

}