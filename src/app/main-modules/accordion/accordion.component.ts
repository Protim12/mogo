import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  showAccordion = false;
  toggleAccordion: number = 0;

  constructor() { }

  ngOnInit(): void {
    // this.showAccordion = false;
  }

  // toggleAccordion() {
  //   this.showAccordion = !this.showAccordion;
  // }

}
