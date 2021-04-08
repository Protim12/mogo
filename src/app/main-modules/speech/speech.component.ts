import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss']
})
export class SpeechComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Owl Carousel
  speechCarousel: OwlOptions = {
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
