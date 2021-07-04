import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListGrid4Component } from './product-list-grid4.component';

describe('ProductListGrid4Component', () => {
  let component: ProductListGrid4Component;
  let fixture: ComponentFixture<ProductListGrid4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListGrid4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListGrid4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
