import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Owl Carousel
  testimonialCarousel: OwlOptions = {
    loop: true,
    dots: false,
    items: 1,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    nav: true,
    smartSpeed: 1500,
    autoHeight: true,
  }

}
