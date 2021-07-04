import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app'
import { Storage } from "@capacitor/storage"
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProductListingService } from '../product-listing/product-listing.service';
const WISHLIST_STORAGE_KEY = 'MY_WISHLIST'

@Injectable()
export class WishlistService {
  private wishListArray = [ ]


  constructor(private afs: AngularFirestore,
    private productListService:ProductListingService) {
     this.loadWishList();
     this.getWishListProductFromFirebase();
  }

  /*loading wishlist to firebase*/
  wishlistObservable = new BehaviorSubject({})
  wishlistKey = null
  async loadWishList() {
    const result = await Storage.get({ key: WISHLIST_STORAGE_KEY });
    if (result.value) {
      this.wishlistKey = result.value;
      this.afs.collection('wish-list').doc(this.wishlistKey).valueChanges().subscribe((result: any) => {
        delete result['lastUpdate'];
        this.wishlistObservable.next(result || {});
      })
    }

    else 
    {
      const fbDocument = await this.afs.collection('wish-list').add({
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
      });
      this.wishlistKey = fbDocument.id;
      await Storage.set({ key: WISHLIST_STORAGE_KEY, value: this.wishlistKey });
    }
  }
 /*loading wishlist to firebase ends*/

 getWishListProductFromFirebase(){
  this.productListService.getProductsFirebase()
  .subscribe((allProducts: any[]) => {
     this.wishListArray = allProducts.filter(p => {
      if (this.wishlistObservable.value[p.id]) {
        return p;
      };
    });
  })
 }


  getWishListItem() { 
    if(this.wishListArray.length<1){
    this.getWishListProductFromFirebase();
  }
    return this.wishListArray.slice();
  }


  deleteWishListItem(id:any, index: number) {
    this.wishListArray.splice(index, 1)
    this.afs.collection('wish-list').doc(this.wishlistKey).update({
      [id]: firebase.firestore.FieldValue.delete(),
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });
  }


  onAddItemToWishList(id: any) {
    this.afs.collection('wish-list').doc(this.wishlistKey).update({
      [id]: id,
      lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
    });
    this.getWishListProductFromFirebase();;
  }

}