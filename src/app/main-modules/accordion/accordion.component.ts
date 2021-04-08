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
    var accordions = document.getElementsByClassName("accordion-header");
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("click", function() {
        var accordionItem = this.parentNode;
        if(accordionItem.classList.contains("active")) {
          accordionItem.classList.remove("active")
        }
        else {
          accordionItem.classList.add("active")
        }
      })
    }
    // this.showAccordion = false;
  }

  // toggleAccordion() {
  //   this.showAccordion = !this.showAccordion;
  // }

}
