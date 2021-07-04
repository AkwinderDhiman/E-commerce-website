import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ShoppingCartService } from './shopping-cart/shopping-cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'new-shop';
  
  constructor(private shoppingCartService:ShoppingCartService) {

  }
ngOnInit(){
 
}
  toggleMobileMenu = false;
  mobileMenuToggle() {
    this.toggleMobileMenu = !this.toggleMobileMenu
  }

  change(value: number): void {
    console.log(value);
}
@ViewChild('scrolltop') scrolltop:ElementRef
@ViewChild('sectionNeedToScroll') sectionNeedToScroll: ElementRef
@HostListener("window:scroll", []) onWindowScroll() {
  this.scrollFunction();
}

scroll = false
// When the user scrolls down 20px from the top of the document, show the button
scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 40) {
     this.scrolltop.nativeElement.style.display = "block";
     console.log(this.scrolltop.nativeElement)
     this.scroll= true
  } else {
    this.scrolltop.nativeElement.style.display = "none";
    this.scroll= false
  }
}

// When the user clicks on the button, scroll to the top of the document
topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 



}
