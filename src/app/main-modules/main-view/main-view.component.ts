import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// ViewChild

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  
  headerView: number = 1;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      940: {
        items: 1
      }
    },
    nav: true,
  //   onChange: () => {
  //     console.log("change");
  //     this.setLi();
  //  }
  }

  constructor() { }

  ngOnInit(): void {
  }

  // setLi(i) {
  //   // console.log(i)
  //   console.log(this.customOptions.dotsEach)
  //   // this.customOptions
  // }

  // // setView(i) {
  // //   console.log(i)
  // // }

}
