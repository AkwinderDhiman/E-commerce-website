import { Injectable } from "@angular/core"
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore"
import { BehaviorSubject } from "rxjs"

@Injectable()

export class ProductListingService {
  cart= new BehaviorSubject({ });
    productsCollection: AngularFirestoreCollection;
  constructor(private afs: AngularFirestore) {
    this.productsCollection = this.afs.collection('products-list');
   }
   getProductsFirebase(){
    return this.productsCollection.valueChanges({idField:'id'});
  }
   
}