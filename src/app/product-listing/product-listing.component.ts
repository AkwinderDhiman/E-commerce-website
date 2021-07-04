
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListingService } from './product-listing.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit , OnDestroy{

  constructor(private productListService: ProductListingService  ) { }
  productList: Observable<any[]>
 
  ngOnInit(){
    this.productList =  this.productListService.getProductsFirebase();
  }

  setClass: string = 'product product-7 text-center'
  visible: string = "visible"

  p: number
  responsive: boolean = true
  itemsPerPage:number = 6

  ngOnDestroy(){

  }
}

