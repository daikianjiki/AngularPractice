import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistwithsearchbarComponent } from './productlistwithsearchbar.component';

describe('ProductlistwithsearchbarComponent', () => {
  let component: ProductlistwithsearchbarComponent;
  let fixture: ComponentFixture<ProductlistwithsearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductlistwithsearchbarComponent]
    });
    fixture = TestBed.createComponent(ProductlistwithsearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
