import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Owl Carousel
  partnerCarousel: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    nav: false,
    smartSpeed: 1500,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    }
  }
}