import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MainViewComponent } from './main-view/main-view.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutUsComponent } from './about-us/about-us.component';
import { CountUpModule } from 'ngx-countup';
import { CounterComponent } from './counter/counter.component';
import { ServiceComponent } from './service/service.component';
import { FeatureComponent } from './feature/feature.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SpeechComponent } from './speech/speech.component';
import { TeamComponent } from './team/team.component';
import { PartnerComponent } from './partner/partner.component';
import { MasoneryComponent } from './masonery/masonery.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientComponent } from './client/client.component';
// import { Waypoint } from '@angular/node_modules/waypoint';
// declare const Waypoint: any;


@NgModule({
  declarations: [MainViewComponent, AboutUsComponent, CounterComponent, ServiceComponent, FeatureComponent, AccordionComponent, SpeechComponent, TeamComponent, PartnerComponent, MasoneryComponent, TestimonialComponent, ClientComponent],
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
