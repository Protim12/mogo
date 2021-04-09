import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // x;
  constructor() { }

  ngOnInit(): void {
  }

  // validateForm() {
  //   var x = document.forms["myform"]["email"].value;
  //   if (x == "") {
  //     alert("Name must be filled out");
  //     return false;
  //   }
  // }

}
