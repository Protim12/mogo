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
  user: any;
  myUser: SocialUser;
  myStoreName: any;
  myStorePhoto: any;
  myStoreEmail: any;
  newArray: any;
  newUserName: any;
  newUserPhoto: any;
  newUserEmail: any;

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
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      if (this.user) {
        localStorage.setItem('googleUserName', JSON.stringify(this.user?.name));
        localStorage.setItem('googleUserPhoto', JSON.stringify(this.user?.photoUrl));
        localStorage.setItem('googleUserEmail', JSON.stringify(this.user?.email));
        this.myStoreName = localStorage.getItem('googleUserName')
        this.myStorePhoto = localStorage.getItem('googleUserPhoto')
        this.myStoreEmail = localStorage.getItem('googleUserEmail')
      }


    })
    
    if(localStorage.getItem('googleUserName')) {
        this.myStoreName = localStorage.getItem('googleUserName')
        this.myStorePhoto = localStorage.getItem('googleUserPhoto')
        this.myStoreEmail = localStorage.getItem('googleUserEmail')
        this.newUserName = JSON.parse(this.myStoreName);
        this.newUserPhoto = JSON.parse(this.myStorePhoto);
        this.newUserEmail = JSON.parse(this.myStoreEmail);
        this.user = {
          "name": this.newUserName,
          "photoUrl": this.newUserPhoto,
          "email": this.newUserEmail,
        }
    }
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

  // google signout
  signOutWithGoogle() {
    this.socialAuthService.signOut()
    localStorage.clear();
    location.reload();
  }

  work() {
    localStorage.setItem("name", "pranto")
    console.log(localStorage)
  }

  clear() {
    localStorage.clear()
  }

}