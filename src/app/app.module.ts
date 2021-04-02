import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModuleModule } from './main-modules/main-module.module';
// import { HomeComponent } from './pages/home/home.component';
// import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
