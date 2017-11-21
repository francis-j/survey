import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouter } from './app.router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { SurveyComponent } from './survey/survey.component';
import { PageComponent } from './survey/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SurveyComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
