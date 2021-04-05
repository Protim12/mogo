import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
    
  }
  
  // Mobile navbar
  MobileNavActive = false;
  viewMobileNav() {
    this.MobileNavActive = !this.MobileNavActive;
  }

  subMenuActive = false;
  viewSubMenu() {
    this.subMenuActive = !this.subMenuActive;
  }

  // Search
  searchOpen = false
  viewSearch() {
    this.searchOpen = true;
  }
  searchClose() {
    this.searchOpen = false;
  }

  ngOnInit(): void {
    // var navbarNav = document.getElementsByClassName("");
  }


}
