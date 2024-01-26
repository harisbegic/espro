import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-best-seller-slide-component',
  templateUrl: './best-seller-slide-component.component.html',
  styleUrl: './best-seller-slide-component.component.css'
})
export class BestSellerSlideComponentComponent {
  @Input() data: any;

  getFullStars(): string {
    return '★'.repeat(this.data.stars);
  }

  getEmptyStars(): string {
    return '☆'.repeat(5 - this.data.stars);
  }

  formatPrice(): string {
    if (this.data.priceRangeBool) {
      return `$${this.data.price} - $${this.data.largestPrice}`;
    } else if (this.data.previousPriceBool) {
      return `$${this.data.price}`;
    }

    return `$${this.data.price}`;
  }
}
