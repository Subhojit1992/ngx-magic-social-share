import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import { MagicSocialShareModule } from './magic-social-share/magic-social-share.module';
import { MagicSocialShareModule } from 'ngx-magic-social-share';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MagicSocialShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
