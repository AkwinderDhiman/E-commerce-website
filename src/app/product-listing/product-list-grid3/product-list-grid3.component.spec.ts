import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListGrid3Component } from './product-list-grid3.component';

describe('ProductListGrid3Component', () => {
  let component: ProductListGrid3Component;
  let fixture: ComponentFixture<ProductListGrid3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListGrid3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListGrid3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
