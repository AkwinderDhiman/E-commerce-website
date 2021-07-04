import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  constructor() { }

  toggleMobileMenu = false;
  @Output() mobileMenuClose = new EventEmitter();
  @Output() clickOutside = new EventEmitter();
  ngOnInit(): void {
  }

  accordian(){
      this.toggleMobileMenu = !this.toggleMobileMenu
  }

  toggle(){
    this.mobileMenuClose.emit(null);
  }


  onClickedOutside(){
    this.clickOutside.emit(null)
  }
}
