import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as component from './index';
import { MainModuleRoutingModule } from './main-module-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountUpModule } from 'ngx-countup';


@NgModule({
  declarations: [ ...component.allComponents],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    LayoutModule,
    CarouselModule,
    CountUpModule,
  ]
})
export class MainModuleModule { 
}
