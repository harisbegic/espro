import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BestSellerSlideComponentComponent } from '../best-seller-slide-component/best-seller-slide-component.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'

})
export class LandingComponent {
  customOptions: OwlOptions = {
    loop: false,
    autoplay: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    margin: 0,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      1020: {
        items: 3
      },
      1440: {
        items: 4
      }
    },
    nav: true
  };

  slides = [
    {
      id: 'slide1',
      image: 'path/to/image1.jpg',
      notice: false,
      name: 'Product 1',
      price: 89.95,
      previousPriceBool: false,
      priceRangeBool: false,
      previousPrice : 99.95,
      largestPrice: 0,
      stars: 2,
    },
    {
      id: 'slide2',
      image: 'path/to/image1.jpg',
      notice: 'sale',
      name: 'Product 2',
      price: 59.95,
      previousPriceBool: false,
      priceRangeBool: true,
      previousPrice : 99.95,
      largestPrice: 200,
      stars: 3,
    },
    {
      id: 'slide3',
      image: 'path/to/image1.jpg',
      notice: 'new',
      name: 'Product 3',
      price: 89.95,
      previousPriceBool: true,
      priceRangeBool: false,
      previousPrice : 99.95,
      largestPrice: 0,
      stars: 4,
    },
    {
      id: 'slide4',
      image: 'path/to/image1.jpg',
      notice: 'back',
      name: 'Product 4',
      price: 89.95,
      previousPriceBool: true,
      priceRangeBool: false,
      previousPrice : 99.95,
      largestPrice: 0,
      stars: 4,
    },
    {
      id: 'slide5',
      image: 'path/to/image1.jpg',
      notice: 'sale',
      name: 'Product 5',
      price: 89.95,
      previousPriceBool: true,
      priceRangeBool: false,
      previousPrice : 99.95,
      largestPrice: 0,
      stars: 4,
    },
    {
      id: 'slide6',
      image: 'path/to/image1.jpg',
      notice: 'sale',
      name: 'Product 6',
      price: 89.95,
      previousPriceBool: true,
      priceRangeBool: false,
      previousPrice : 99.95,
      largestPrice: 0,
      stars: 4,
    },
  ];

  constructor() { }

  ngOnInit(): void { }
  
}
