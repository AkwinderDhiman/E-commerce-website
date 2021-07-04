import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListToolboxComponent } from './product-list-toolbox.component';

describe('ProductListToolboxComponent', () => {
  let component: ProductListToolboxComponent;
  let fixture: ComponentFixture<ProductListToolboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListToolboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
