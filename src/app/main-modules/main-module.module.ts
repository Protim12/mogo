import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MainViewComponent } from './main-view/main-view.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutUsComponent } from './about-us/about-us.component';
import { CountUpModule } from 'ngx-countup';
// import { Waypoint } from '@angular/node_modules/waypoint';
// declare const Waypoint: any;


@NgModule({
  declarations: [MainViewComponent, AboutUsComponent],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    LayoutModule,
    CarouselModule,
    CountUpModule,
    // Waypoint
  ]
})
export class MainModuleModule { 
}
