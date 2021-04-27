import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// BrowserAnimationsModule
import { MainViewComponent } from './main-view/main-view.component';
import { QuizesComponent } from './quizes/quizes.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent
  },
  {
    path: 'quizes',
    component: QuizesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
