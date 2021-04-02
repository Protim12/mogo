import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MainViewComponent } from './main-view/main-view.component';


@NgModule({
  declarations: [MainViewComponent],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    LayoutModule
  ]
})
export class MainModuleModule { }
