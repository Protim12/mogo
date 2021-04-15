import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// BrowserAnimationsModule
import { MainViewComponent } from './main-view/main-view.component';
import { QuizesComponent } from './quizes/quizes.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent
  },
  {
    path: 'quizes',
    component: QuizesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
