import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDirectoryComponent } from './product-directory.component';

describe('ProductDirectoryComponent', () => {
  let component: ProductDirectoryComponent;
  let fixture: ComponentFixture<ProductDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
