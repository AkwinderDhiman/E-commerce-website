import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
 @Input() showButton:boolean=true;
 @Input() buttonText:string='Shop Now'
 @Input() title:string='Caption'
 @Input() imageSrc:string=''
 @Input() altText:string='banner'
 @Input() subTitle:string=''
  constructor() { }

  ngOnInit(): void {
  }
  
  
}
