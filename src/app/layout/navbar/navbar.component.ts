import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;
  user: SocialUser;

  constructor(private socialAuthService: SocialAuthService) {
    
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
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
    })
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

  // google signin
  signInWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
