import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'magic-fb-share',
  templateUrl: './ngx-magic-fb-share.component.html',
  styleUrls: ['./ngx-magic-fb-share.component.css']
})
export class NgxMagicFbShareComponent implements OnInit {
  @Input() url;
  @Input() icon;
  @Input() width;

  fbLink: any = 'https://www.facebook.com/sharer/sharer.php?u=';
  iconImg: any = 'https://image.flaticon.com/icons/svg/179/179319.svg';


  constructor() { }

  share(e) {
    e.preventDefault();
    const encoded = encodeURIComponent(this.url);
    window.open(`${this.fbLink}${encoded}`, 'fbShareWindow', 'height=450, width=550, top=' + (window.outerHeight / 2 - 275) + ', left=' + (window.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    return false;
  }

  blankComponent() {
    if (this.icon === undefined) {
      this.icon = this.iconImg;
    }
    if (this.url === undefined) {
      this.url = window.location.href;
    }
    if (this.width === undefined) {
      this.width = '50px';
    }
  }


  ngOnInit() {
    this.blankComponent();
  }

}
