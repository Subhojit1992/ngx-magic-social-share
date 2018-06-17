import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMagicFbShareComponent } from './ngx-magic-fb-share/ngx-magic-fb-share.component';
import { NgxMagicTwittShareComponent } from './ngx-magic-twitt-share/ngx-magic-twitt-share.component';
import { NgxMagicGplusShareComponent } from './ngx-magic-gplus-share/ngx-magic-gplus-share.component';
import { NgxMagicWhatsappShareComponent } from './ngx-magic-whatsapp-share/ngx-magic-whatsapp-share.component';
import { NgxMagicMailShareComponent } from './ngx-magic-mail-share/ngx-magic-mail-share.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxMagicFbShareComponent,
    NgxMagicTwittShareComponent,
    NgxMagicGplusShareComponent,
    NgxMagicWhatsappShareComponent,
    NgxMagicMailShareComponent
  ],
  exports: [
    NgxMagicFbShareComponent,
    NgxMagicTwittShareComponent,
    NgxMagicGplusShareComponent,
    NgxMagicWhatsappShareComponent,
    NgxMagicMailShareComponent
  ]
})
export class MagicSocialShareModule { }
