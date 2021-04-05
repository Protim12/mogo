import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
// import { MainViewComponent } from '../main-modules/main-view/main-view.component';


// const routes: Routes = [
//   {
//     path: '', component: MainViewComponent
//   },
// ];

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class LayoutModule { }
