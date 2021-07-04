import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListingService } from '../product-listing.service';

@Component({
  selector: 'app-product-list-grid3',
  templateUrl: './product-list-grid3.component.html',
  styleUrls: ['./product-list-grid3.component.scss']
})
export class ProductListGrid3Component implements OnInit {
  p:any
  responsive:boolean =true
  maxSize:number= 3
  constructor(private productListService: ProductListingService) { }
  productListGrid3:Observable<any[]>
  ngOnInit(): void {
    this.productListGrid3 = this.productListService.getProductsFirebase();
  }
  setClass:string = 'product product-7 text-center'
  visible:string = "visible"
  

}
