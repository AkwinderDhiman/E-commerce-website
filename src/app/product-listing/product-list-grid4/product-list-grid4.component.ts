import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListingService } from '../product-listing.service';

@Component({
  selector: 'app-product-list-grid4',
  templateUrl: './product-list-grid4.component.html',
  styleUrls: ['./product-list-grid4.component.scss']
})
export class ProductListGrid4Component implements OnInit {

  constructor(private productListService: ProductListingService) { }
  productListGrid4:Observable<any>
  ngOnInit(): void {
    this.productListGrid4 = this.productListService.getProductsFirebase();
  }
  setClass:string = 'product product-7 text-center'
  visible:string = "visible"
  p:any
  responsive:boolean = true
  
  
}
