import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

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

  ngAfterViewInit(){
    this.elementPosition = 10;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.elementPosition){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

}
