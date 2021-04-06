import { Component, AfterViewInit, HostListener, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  @ViewChild('counter') counter: ElementRef;
  param=0;
  // myArray: number[] = [365];
  testTop: any;
  constructor() { }

  ngOnInit(): void {
    // let demo = new CountUp('myTargetElement', 6701);
    // if (!demo.error) {
    //   demo.start();
    // } else {
    //   console.error(demo.error);
    // }
  }

  ngAfterViewInit(){
    var test = document.getElementById("test")
    this.testTop = test.offsetTop;
  }

  // @HostListener('window:scroll', ['$event'])
  // handleScroll(){
    
  //   const windowScroll = window.pageYOffset;
  //   if (windowScroll >= this.testTop) {
  //     console.log("hi")
  //   }
    
  // }



  @HostListener('window:scroll', ['$event']) // for window scroll events
  onWindowScroll(event) {
    var rect = this.counter.nativeElement.getBoundingClientRect();
    var elemTop = rect.top; var elemBottom = rect.bottom;
    (elemTop >= 0) && (elemBottom <= window.innerHeight) ? this.param=365:null
  }

}
