
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/ui-components/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private productService:ProductService){}
  products:any[] = [{
    "category": "clothing",
    "subCategory": "Linen-blend dress",
    "label": "",
    "price": "60.00",
    "oldPrice": "",
    "imageSrc": [
      "../../../../assets/images/demos/demo-12/products/product-1.jpg",
      "../../../../assets/images/demos/demo-12/products/product-1-2.jpg"
    ],
    "color": [
      "#e5dcb1;",
      "#bacbd8;"
    ],
    "quantity": "1",
    "stockStatus": "Out of stock",
    "reviews_rating": [
      {
        "reviewRatingStar": 4,
        "reviewersName": "Nirmal",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      },
      {
        "reviewRatingStar": 5,
        "reviewersName": "Navjeet Singh",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      }
    ],
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum\n    dolores assumenda asperiores facilis porro reprehenderit animi culpa\n    atque blanditiis commodi perspiciatis doloremque, possimus, explicabo,\n    autem fugit beatae quae voluptas!"
  },
  {
    "category": "shoes",
    "subCategory": "Sandlas with lacing",
    "label": "Top",
    "price": "70.00",
    "oldPrice": "90.00",
    "imageSrc": [
      "../../../../assets/images/demos/demo-12/products/product-2.jpg",
      "../../../../assets/images/demos/demo-12/products/product-2-2.jpg"
    ],
    "color": [],
    "quantity": "1",
    "stockStatus": "in stock",
    "reviews_rating": [
      {
        "reviewRatingStar": 4,
        "reviewersName": "Karan",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      },
      {
        "reviewRatingStar": 3,
        "reviewersName": "Ekam",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      },
      {
        "reviewRatingStar": 5,
        "reviewersName": "Aman",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      }
    ],
    "description": ""
  },
  {
    "category": "clothing",
    "subCategory": "Paper bag trousers",
    "label": "",
    "price": "60.00",
    "oldPrice": "",
    "imageSrc": [
      "../../../../assets/images/demos/demo-12/products/product-3.jpg",
      "../../../../assets/images/demos/demo-12/products/product-3-2.jpg"
    ],
    "color": [
      "#9fac76;",
      "#333333;"
    ],
    "quantity": "1",
    "stockStatus": "in stock",
    "reviews_rating": [
      {
        "reviewRatingStar": 3,
        "reviewersName": "Davinder",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      },
      {
        "reviewRatingStar": 2,
        "reviewersName": "Mehak",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      },
      {
        "reviewRatingStar": 3,
        "reviewersName": "Fateh",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      }
    ],
    "description": ""
  },
  {
    "category": "handbags",
    "subCategory": "Bucket bag",
    "label": "",
    "price": "350.00",
    "oldPrice": "",
    "imageSrc": [
      "../../../../assets/images/demos/demo-12/products/product-4.jpg",
      "../../../../assets/images/demos/demo-12/products/product-4-2.jpg"
    ],
    "color": [],
    "quantity": "1",
    "stockStatus": "in stock",
    "reviews_rating": [
      {
        "reviewRatingStar": 2,
        "reviewersName": "Navjeet Singh",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      },
      {
        "reviewRatingStar": 2,
        "reviewersName": "Rajveer Kaur",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      },
      {
        "reviewRatingStar": 3,
        "reviewersName": "Inderjeet Singh",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 1625207937739
      }
    ],
    "description": ""
  },
  {
    "category": "clothing",
    "subCategory": "Silk-blended kaftan",
    "label": "new",
    "price": "370.00",
    "oldPrice": "",
    "imageSrc": [
      "../../../../assets/images/demos/demo-12/products/product-5.jpg",
      "../../../../assets/images/demos/demo-12/products/product-5-2.jpg"
    ],
    "color": [],
    "quantity": "1",
    "stockStatus": "in stock",
    "reviews_rating": [
      {
        "reviewRatingStar": 4,
        "reviewersName": "Harsimran",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 0
      },
      {
        "reviewRatingStar": 4,
        "reviewersName": "Sukhraas",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 0
      },
      {
        "reviewRatingStar": 3,
        "reviewersName": "Prabhgeet",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 0
      }
    ],
    "description": ""
  },
  {
    "category": "Sandles",
    "subCategory": "Spring sandlas",
    "label": "",
    "price": "59.00",
    "oldPrice": "",
    "imageSrc": [
      "../../../../assets/images/demos/demo-12/products/product-6.jpg",
      "../../../../assets/images/demos/demo-12/products/product-6-2.jpg"
    ],
    "color": [],
    "quantity": "1",
    "stockStatus": "out of stock",
    "reviews_rating": [
      {
        "reviewRatingStar": 4,
        "reviewersName": "Kulveer Kaur",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 0
      },
      {
        "reviewRatingStar": 5,
        "reviewersName": "Sukhjiner Singh",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 0
      },
      {
        "reviewRatingStar": 3,
        "reviewersName": "Karan",
        "reviewlikes": 0,
        "reviewdislikes": 0,
        "time": 0
      }
    ],
    "description": ""
  }
]
  ngOnInit() {
    // this.productService.getProductsFirebase().subscribe(value => {
    //   this.products = value.slice(0,5)
    // })
   }
 color= true
 changeImgSrc = false
 setClass:string ='product product-4'
   
  /* properties of base home carousel starts*/
  width: string = "1349px";
  images = [1].map((n) => `../../../assets/images/demos/demo-12/slider/slide-${n}.jpg`);
  showNavigationArrows = false;
  showNavigationIndicators = false;
  /*end of properties of base home carousel*/


  

  /*properties carousel component starts */
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 20,
    navSpeed: 400,
    navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
    responsive: {
      0: {
        "items": 1
      },
      480: {
        "items": 1
      },
      768: {
        "items": 3
      },
      992: {
        "items": 4
      },
      1200: {
        "items": 4,
        "nav": true
      }
    },
    nav: true
  }
  carouselHeight = 480;
  cellsToShow = 4;
  
  
  /*properties carousel component end */


  /*properties banner component*/

  /*first banner product*/
  imageSrc1: string = "../../../assets/images/demos/demo-12/banners/banner-1.jpg"
  bannerTitle1: string = "This Week's Most Wanted"
  /*end of  first banner product*/


  /*second banner product*/
  buttonText2: string = "Discover Now"
  imageSrc2: string = "../../../assets/images/demos/demo-12/banners/banner-2.jpg"
  bannerTitle2: string = "Bags by Mood"
  /*end of second banner product*/


  /*third banner product*/
  imageSrc3: string = "../../../assets/images/demos/demo-12/banners/banner-3.jpg"
  bannerTitle3: string = "The Trend Story"
  /*end of third banner product*/
 

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth + "px";
  }



  /*properties banner component*/

  /*first banner product*/
  imageSrc4: string = "../../../assets/images/demos/demo-12/banners/banner-4.jpg"
  bannerTitle4: string = "Accessories"
  subTitle4: string = "16 items "
  /*end of  first banner product*/


  /*second banner product*/
  buttonText5: string = "Discover Now"
  imageSrc5: string = "../../../assets/images/demos/demo-12/banners/banner-5.jpg"
  bannerTitle5: string = "Clothing"
  subTitle5: string = "6 items "
  /*end of second banner product*/


  /*third banner product*/
  imageSrc6: string = "../../../assets/images/demos/demo-12/banners/banner-6.jpg"
  bannerTitle6: string = "Shoes"
  subTitle6: string = "24 items "
  /*end of third banner product*/

  /*fourth banner product*/
  imageSrc7: string = "../../../assets/images/demos/demo-12/banners/banner-7.jpg"
  bannerTitle7: string = "Jewellery"
  subTitle7: string = "8 items"
  /*end of fourth banner product*/

}



