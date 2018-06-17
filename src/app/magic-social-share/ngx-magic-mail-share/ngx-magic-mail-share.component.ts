import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'magic-mail-share',
  templateUrl: './ngx-magic-mail-share.component.html',
  styleUrls: ['./ngx-magic-mail-share.component.css']
})
export class NgxMagicMailShareComponent implements OnInit {

  @Input() url;
  @Input() icon;
  @Input() width;
  @Input() extraText;

  mailLink: any = 'mailto:?body=';
  iconImg: any = 'https://image.flaticon.com/icons/svg/181/181535.svg';


  constructor() { }

  share(e) {
    e.preventDefault();
    const encoded = encodeURIComponent(this.url);
    window.open(`${this.mailLink}${this.extraText}${encoded}`, 'mailShareWindow', 'height=450, width=550, top=' + (window.outerHeight / 2 - 275) + ', left=' + (window.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
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
    if (this.extraText === undefined) {
      this.extraText = 'Hello! here is the awesome link ';
    }
  }


  ngOnInit() {
    this.blankComponent();
  }

}
