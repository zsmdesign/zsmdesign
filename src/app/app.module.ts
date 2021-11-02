import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HammerModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { VideosComponent } from './videos/videos.component';
import { FrontendComponent } from './frontend/frontend.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    VideosComponent,
    FrontendComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }