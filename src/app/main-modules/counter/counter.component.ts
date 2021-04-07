import { Component, AfterViewInit, HostListener, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @ViewChild('counter') counter: ElementRef;
  myVariable: any[] = [
    {param: 0, text: "WEB DESIGN PROJECTS"},
    {param: 0, text: "HAPPY CLIENT"},
    {param: 0, text: "AWARD WINNER"},
    {param: 0, text: "CUP OF COFFEE"},
    {param: 0, text: "MEMBERS"},
  ];
  list: number[] = [42, 123, 15, 99, 24];
  constructor() { }
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onWindowScroll(event) {
    var rect = this.counter.nativeElement.getBoundingClientRect();
    var elemTop = rect.top; var elemBottom = rect.bottom;
    if ((elemTop >= 0) && (elemBottom <= window.innerHeight)) {
      for ( var i=0; i<this.myVariable.length; i++) {
        for (var j=i; j<=i; j++) {
          this.myVariable[i].param = this.list[j];
        }
      }
    }
  }
}