import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListingService } from '../product-listing.service';

@Component({
  selector: 'app-product-list-row',
  templateUrl: './product-list-row.component.html',
  styleUrls: ['./product-list-row.component.scss']
})
export class ProductListRowComponent implements OnInit {

  constructor(private productListService: ProductListingService) { }
  productListRow:Observable<any[]>  
  ngOnInit(): void {
    this.productListRow =  this.productListService.getProductsFirebase();
  }
  p:any
  responsive:boolean =true
  visible:string = "visible"
  
  layout:string= "list"
  
  
}
