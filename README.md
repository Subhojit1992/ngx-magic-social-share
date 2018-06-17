# NgxMagicSocialShare

This is very simple social share plugin that will share website or app url to the social media network. This is very high customizable plugin and very easy to use.
### Currently supported
* Facebook
* Google Plus
* Twitter
* WhatsApp
* Email
* More yet to come ...

## Installation

```
npm install ngx-magic-social-share
```
or
```
yarn add ngx-magic-social-share
```

In your "AppModule" file add this plugin
```TypeScript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// ngx-magic-social-share added
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
```

## Default Usage
In your component folder you can use like the below example
```html
<magic-fb-share></magic-fb-share>
<magic-gplus-share></magic-gplus-share>
<magic-twitt-share></magic-twitt-share>
<magic-whatsapp-share></magic-whatsapp-share>
<magic-mail-share></magic-mail-share>
```
**Note:** If you use like this then this social share plugin will share the current page url

## Customization by property

Name        | Can Use                                    | Details
----------- | ------------------------------------------ | ------------- 
url         | In all component                           | Set your url that you want to share
icon        | In all component                           | Set your custom icon **(use image path or url)**
width       | In all component                           | Set the icon size
extraText   | Only In **"magic-mail-share"**  component  | Set the additional text for the email body 


## Note
You feel free to contribute or find issue.

