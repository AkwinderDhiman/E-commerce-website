import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductListingService } from '../product-listing.service';

@Component({
  selector: 'app-product-list-toolbox',
  templateUrl: './product-list-toolbox.component.html',
  styleUrls: ['./product-list-toolbox.component.scss']
})
export class ProductListToolboxComponent implements OnInit {
   productList:Observable<any[]>
  constructor(private productListService: ProductListingService) { }
  ngOnInit(): void {
   this.productList =  this.productListService.getProductsFirebase();
  }

}
