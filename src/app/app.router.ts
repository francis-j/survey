import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
    {
        path:       "",
        component:  HomeComponent
    },
    {
        path:       "survey/:id",
        component:  SurveyComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouter { }
