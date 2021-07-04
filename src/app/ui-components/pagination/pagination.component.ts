import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


function coerceToBoolean(input: string | boolean): boolean {
  return !!input && input !== 'false';
}
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() id: string;
  @Input() maxSize: number = 7;
  @Input()
  get directionLinks(): boolean {
    return this._directionLinks;
  }
  set directionLinks(value: boolean) {
    this._directionLinks = coerceToBoolean(value);
  }
  @Input()
  get autoHide(): boolean {
    return this._autoHide;
  }
  set autoHide(value: boolean) {
    this._autoHide = coerceToBoolean(value);
  }
  @Input()
  get responsive(): boolean {
    return this._responsive;
  }
  set responsive(value: boolean) {
    this._responsive = coerceToBoolean(value);
  }
  @Input() p: any
  @Input() responsive1: boolean = true
  @Input() previousLabel: string = 'Previous';
  @Input() nextLabel: string = 'Next';
  @Input() screenReaderPaginationLabel: string = 'Pagination';
  @Input() screenReaderPageLabel: string = 'page';
  @Input() screenReaderCurrentLabel: string = `You're on page`;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() pageBoundsCorrection: EventEmitter<number> = new EventEmitter<number>();

  private _directionLinks: boolean = true;
  private _autoHide: boolean = false;
  private _responsive: boolean = true;

  trackByIndex(index: number) {
    return index;
  }
}
