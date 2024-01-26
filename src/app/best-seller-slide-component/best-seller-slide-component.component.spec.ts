import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellerSlideComponentComponent } from './best-seller-slide-component.component';

describe('BestSellerSlideComponentComponent', () => {
  let component: BestSellerSlideComponentComponent;
  let fixture: ComponentFixture<BestSellerSlideComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestSellerSlideComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestSellerSlideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
