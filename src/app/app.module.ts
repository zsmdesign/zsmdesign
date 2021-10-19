import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { VideosComponent } from './videos/videos.component';
import { FrontendComponent } from './frontend/frontend.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    VideosComponent,
    FrontendComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
