import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'magic-twitt-share',
  templateUrl: './ngx-magic-twitt-share.component.html',
  styleUrls: ['./ngx-magic-twitt-share.component.css']
})
export class NgxMagicTwittShareComponent implements OnInit {

  @Input() url;
  @Input() icon;
  @Input() width;

  twittLink: any = 'https://twitter.com/home?status=';
  iconImg: any = 'https://image.flaticon.com/icons/svg/145/145812.svg';


  constructor() { }

  share(e) {
    e.preventDefault();
    const encoded = encodeURIComponent(this.url);
    window.open(`${this.twittLink}${encoded}`, 'twittShareWindow', 'height=450, width=550, top=' + (window.outerHeight / 2 - 275) + ', left=' + (window.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
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
