import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordiondemoComponent } from './accordiondemo.component';

describe('AccordiondemoComponent', () => {
  let component: AccordiondemoComponent;
  let fixture: ComponentFixture<AccordiondemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordiondemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordiondemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
