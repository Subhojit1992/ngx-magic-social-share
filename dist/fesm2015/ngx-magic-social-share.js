import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxMagicFbShareComponent {
    constructor() {
        this.fbLink = 'https://www.facebook.com/sharer/sharer.php?u=';
        this.iconImg = 'https://image.flaticon.com/icons/svg/179/179319.svg';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    share(e) {
        e.preventDefault();
        const /** @type {?} */ encoded = encodeURIComponent(this.url);
        window.open(`${this.fbLink}${encoded}`, 'fbShareWindow', 'height=450, width=550, top=' + (window.outerHeight / 2 - 275) + ', left=' + (window.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.blankComponent();
    }
}
NgxMagicFbShareComponent.decorators = [
    { type: Component, args: [{
                selector: 'magic-fb-share',
                template: `<a 
  href="javascript:void(0)" 
  target="_blank" 
  (click)="share($event)" 
  [ngStyle]="{'display':'inline-block', 'width': width}"
>
  <img [src]="icon">
</a>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
NgxMagicFbShareComponent.ctorParameters = () => [];
NgxMagicFbShareComponent.propDecorators = {
    url: [{ type: Input }],
    icon: [{ type: Input }],
    width: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxMagicTwittShareComponent {
    constructor() {
        this.twittLink = 'https://twitter.com/home?status=';
        this.iconImg = 'https://image.flaticon.com/icons/svg/145/145812.svg';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    share(e) {
        e.preventDefault();
        const /** @type {?} */ encoded = encodeURIComponent(this.url);
        window.open(`${this.twittLink}${encoded}`, 'twittShareWindow', 'height=450, width=550, top=' + (window.outerHeight / 2 - 275) + ', left=' + (window.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.blankComponent();
    }
}
NgxMagicTwittShareComponent.decorators = [
    { type: Component, args: [{
                selector: 'magic-twitt-share',
                template: `<a 
  href="javascript:void(0)" 
  target="_blank" 
  (click)="share($event)" 
  [ngStyle]="{'display':'inline-block', 'width': width}"
>
  <img [src]="icon">
</a>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
NgxMagicTwittShareComponent.ctorParameters = () => [];
NgxMagicTwittShareComponent.propDecorators = {
    url: [{ type: Input }],
    icon: [{ type: Input }],
    width: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxMagicGplusShareComponent {
    constructor() {
        this.gPlusLink = 'https://plus.google.com/share?url=';
        this.iconImg = 'https://image.flaticon.com/icons/svg/145/145804.svg';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    share(e) {
        e.preventDefault();
        const /** @type {?} */ encoded = encodeURIComponent(this.url);
        window.open(`${this.gPlusLink}${encoded}`, 'gPlusShareWindow', 'height=450, width=550, top=' + (window.outerHeight / 2 - 275) + ', left=' + (window.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.blankComponent();
    }
}
NgxMagicGplusShareComponent.decorators = [
    { type: Component, args: [{
                selector: 'magic-gplus-share',
                template: `<a 
  href="javascript:void(0)" 
  target="_blank" 
  (click)="share($event)" 
  [ngStyle]="{'display':'inline-block', 'width': width}"
>
  <img [src]="icon">
</a>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
NgxMagicGplusShareComponent.ctorParameters = () => [];
NgxMagicGplusShareComponent.propDecorators = {
    url: [{ type: Input }],
    icon: [{ type: Input }],
    width: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxMagicWhatsappShareComponent {
    constructor() {
        this.whatsAppLink = 'https://api.whatsapp.com/send?text=';
        this.iconImg = 'https://image.flaticon.com/icons/svg/134/134937.svg';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    share(e) {
        e.preventDefault();
        const /** @type {?} */ encoded = encodeURIComponent(this.url);
        window.open(`${this.whatsAppLink}${encoded}`, 'whatsAppShareWindow', 'height=450, width=550, top=' + (window.outerHeight / 2 - 275) + ', left=' + (window.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.blankComponent();
    }
}
NgxMagicWhatsappShareComponent.decorators = [
    { type: Component, args: [{
                selector: 'magic-whatsapp-share',
                template: `<a 
  href="javascript:void(0)" 
  target="_blank" 
  (click)="share($event)" 
  [ngStyle]="{'display':'inline-block', 'width': width}"
>
  <img [src]="icon">
</a>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
NgxMagicWhatsappShareComponent.ctorParameters = () => [];
NgxMagicWhatsappShareComponent.propDecorators = {
    url: [{ type: Input }],
    icon: [{ type: Input }],
    width: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxMagicMailShareComponent {
    constructor() {
        this.mailLink = 'mailto:?body=';
        this.iconImg = 'https://image.flaticon.com/icons/svg/181/181535.svg';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    share(e) {
        e.preventDefault();
        const /** @type {?} */ encoded = encodeURIComponent(this.url);
        window.open(`${this.mailLink}${this.extraText}${encoded}`, 'mailShareWindow', 'height=450, width=550, top=' + (window.outerHeight / 2 - 275) + ', left=' + (window.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.blankComponent();
    }
}
NgxMagicMailShareComponent.decorators = [
    { type: Component, args: [{
                selector: 'magic-mail-share',
                template: `<a 
  href="javascript:void(0)" 
  target="_blank" 
  (click)="share($event)" 
  [ngStyle]="{'display':'inline-block', 'width': width}"
>
  <img [src]="icon">
</a>
`,
                styles: [``]
            },] },
];
/** @nocollapse */
NgxMagicMailShareComponent.ctorParameters = () => [];
NgxMagicMailShareComponent.propDecorators = {
    url: [{ type: Input }],
    icon: [{ type: Input }],
    width: [{ type: Input }],
    extraText: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MagicSocialShareModule {
}
MagicSocialShareModule.decorators = [
    { type: NgModule, args: [{
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
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { MagicSocialShareModule, NgxMagicFbShareComponent as ɵa, NgxMagicGplusShareComponent as ɵc, NgxMagicMailShareComponent as ɵe, NgxMagicTwittShareComponent as ɵb, NgxMagicWhatsappShareComponent as ɵd };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hZ2ljLXNvY2lhbC1zaGFyZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LW1hZ2ljLXNvY2lhbC1zaGFyZS9zcmMvYXBwL21hZ2ljLXNvY2lhbC1zaGFyZS9uZ3gtbWFnaWMtZmItc2hhcmUvbmd4LW1hZ2ljLWZiLXNoYXJlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hZ2ljLXNvY2lhbC1zaGFyZS9zcmMvYXBwL21hZ2ljLXNvY2lhbC1zaGFyZS9uZ3gtbWFnaWMtdHdpdHQtc2hhcmUvbmd4LW1hZ2ljLXR3aXR0LXNoYXJlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hZ2ljLXNvY2lhbC1zaGFyZS9zcmMvYXBwL21hZ2ljLXNvY2lhbC1zaGFyZS9uZ3gtbWFnaWMtZ3BsdXMtc2hhcmUvbmd4LW1hZ2ljLWdwbHVzLXNoYXJlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hZ2ljLXNvY2lhbC1zaGFyZS9zcmMvYXBwL21hZ2ljLXNvY2lhbC1zaGFyZS9uZ3gtbWFnaWMtd2hhdHNhcHAtc2hhcmUvbmd4LW1hZ2ljLXdoYXRzYXBwLXNoYXJlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hZ2ljLXNvY2lhbC1zaGFyZS9zcmMvYXBwL21hZ2ljLXNvY2lhbC1zaGFyZS9uZ3gtbWFnaWMtbWFpbC1zaGFyZS9uZ3gtbWFnaWMtbWFpbC1zaGFyZS5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy1zb2NpYWwtc2hhcmUvc3JjL2FwcC9tYWdpYy1zb2NpYWwtc2hhcmUvbWFnaWMtc29jaWFsLXNoYXJlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFnaWMtZmItc2hhcmUnLFxuICB0ZW1wbGF0ZTogYDxhIFxuICBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgXG4gIHRhcmdldD1cIl9ibGFua1wiIFxuICAoY2xpY2spPVwic2hhcmUoJGV2ZW50KVwiIFxuICBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOidpbmxpbmUtYmxvY2snLCAnd2lkdGgnOiB3aWR0aH1cIlxuPlxuICA8aW1nIFtzcmNdPVwiaWNvblwiPlxuPC9hPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIE5neE1hZ2ljRmJTaGFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHVybDtcbiAgQElucHV0KCkgaWNvbjtcbiAgQElucHV0KCkgd2lkdGg7XG5cbiAgZmJMaW5rOiBhbnkgPSAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JztcbiAgaWNvbkltZzogYW55ID0gJ2h0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNzkvMTc5MzE5LnN2Zyc7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHNoYXJlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnVybCk7XG4gICAgd2luZG93Lm9wZW4oYCR7dGhpcy5mYkxpbmt9JHtlbmNvZGVkfWAsICdmYlNoYXJlV2luZG93JywgJ2hlaWdodD00NTAsIHdpZHRoPTU1MCwgdG9wPScgKyAod2luZG93Lm91dGVySGVpZ2h0IC8gMiAtIDI3NSkgKyAnLCBsZWZ0PScgKyAod2luZG93LmlubmVyV2lkdGggLyAyIC0gMjI1KSArICcsIHRvb2xiYXI9MCwgbG9jYXRpb249MCwgbWVudWJhcj0wLCBkaXJlY3Rvcmllcz0wLCBzY3JvbGxiYXJzPTAnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBibGFua0NvbXBvbmVudCgpIHtcbiAgICBpZiAodGhpcy5pY29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMuaWNvbkltZztcbiAgICB9XG4gICAgaWYgKHRoaXMudXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuICAgIGlmICh0aGlzLndpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2lkdGggPSAnNTBweCc7XG4gICAgfVxuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJsYW5rQ29tcG9uZW50KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hZ2ljLXR3aXR0LXNoYXJlJyxcbiAgdGVtcGxhdGU6IGA8YSBcbiAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIFxuICB0YXJnZXQ9XCJfYmxhbmtcIiBcbiAgKGNsaWNrKT1cInNoYXJlKCRldmVudClcIiBcbiAgW25nU3R5bGVdPVwieydkaXNwbGF5JzonaW5saW5lLWJsb2NrJywgJ3dpZHRoJzogd2lkdGh9XCJcbj5cbiAgPGltZyBbc3JjXT1cImljb25cIj5cbjwvYT5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYWdpY1R3aXR0U2hhcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHVybDtcbiAgQElucHV0KCkgaWNvbjtcbiAgQElucHV0KCkgd2lkdGg7XG5cbiAgdHdpdHRMaW5rOiBhbnkgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbS9ob21lP3N0YXR1cz0nO1xuICBpY29uSW1nOiBhbnkgPSAnaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0NS8xNDU4MTIuc3ZnJztcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2hhcmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMudXJsKTtcbiAgICB3aW5kb3cub3BlbihgJHt0aGlzLnR3aXR0TGlua30ke2VuY29kZWR9YCwgJ3R3aXR0U2hhcmVXaW5kb3cnLCAnaGVpZ2h0PTQ1MCwgd2lkdGg9NTUwLCB0b3A9JyArICh3aW5kb3cub3V0ZXJIZWlnaHQgLyAyIC0gMjc1KSArICcsIGxlZnQ9JyArICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSAyMjUpICsgJywgdG9vbGJhcj0wLCBsb2NhdGlvbj0wLCBtZW51YmFyPTAsIGRpcmVjdG9yaWVzPTAsIHNjcm9sbGJhcnM9MCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGJsYW5rQ29tcG9uZW50KCkge1xuICAgIGlmICh0aGlzLmljb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pY29uID0gdGhpcy5pY29uSW1nO1xuICAgIH1cbiAgICBpZiAodGhpcy51cmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9XG4gICAgaWYgKHRoaXMud2lkdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53aWR0aCA9ICc1MHB4JztcbiAgICB9XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmxhbmtDb21wb25lbnQoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFnaWMtZ3BsdXMtc2hhcmUnLFxuICB0ZW1wbGF0ZTogYDxhIFxuICBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgXG4gIHRhcmdldD1cIl9ibGFua1wiIFxuICAoY2xpY2spPVwic2hhcmUoJGV2ZW50KVwiIFxuICBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOidpbmxpbmUtYmxvY2snLCAnd2lkdGgnOiB3aWR0aH1cIlxuPlxuICA8aW1nIFtzcmNdPVwiaWNvblwiPlxuPC9hPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIE5neE1hZ2ljR3BsdXNTaGFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHVybDtcbiAgQElucHV0KCkgaWNvbjtcbiAgQElucHV0KCkgd2lkdGg7XG5cbiAgZ1BsdXNMaW5rOiBhbnkgPSAnaHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vc2hhcmU/dXJsPSc7XG4gIGljb25JbWc6IGFueSA9ICdodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ1LzE0NTgwNC5zdmcnO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBzaGFyZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy51cmwpO1xuICAgIHdpbmRvdy5vcGVuKGAke3RoaXMuZ1BsdXNMaW5rfSR7ZW5jb2RlZH1gLCAnZ1BsdXNTaGFyZVdpbmRvdycsICdoZWlnaHQ9NDUwLCB3aWR0aD01NTAsIHRvcD0nICsgKHdpbmRvdy5vdXRlckhlaWdodCAvIDIgLSAyNzUpICsgJywgbGVmdD0nICsgKHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIyNSkgKyAnLCB0b29sYmFyPTAsIGxvY2F0aW9uPTAsIG1lbnViYXI9MCwgZGlyZWN0b3JpZXM9MCwgc2Nyb2xsYmFycz0wJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYmxhbmtDb21wb25lbnQoKSB7XG4gICAgaWYgKHRoaXMuaWNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmljb24gPSB0aGlzLmljb25JbWc7XG4gICAgfVxuICAgIGlmICh0aGlzLnVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWR0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndpZHRoID0gJzUwcHgnO1xuICAgIH1cbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ibGFua0NvbXBvbmVudCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYWdpYy13aGF0c2FwcC1zaGFyZScsXG4gIHRlbXBsYXRlOiBgPGEgXG4gIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBcbiAgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gIChjbGljayk9XCJzaGFyZSgkZXZlbnQpXCIgXG4gIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6J2lubGluZS1ibG9jaycsICd3aWR0aCc6IHdpZHRofVwiXG4+XG4gIDxpbWcgW3NyY109XCJpY29uXCI+XG48L2E+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TWFnaWNXaGF0c2FwcFNoYXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB1cmw7XG4gIEBJbnB1dCgpIGljb247XG4gIEBJbnB1dCgpIHdpZHRoO1xuXG4gIHdoYXRzQXBwTGluazogYW55ID0gJ2h0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3RleHQ9JztcbiAgaWNvbkltZzogYW55ID0gJ2h0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xMzQvMTM0OTM3LnN2Zyc7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHNoYXJlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnVybCk7XG4gICAgd2luZG93Lm9wZW4oYCR7dGhpcy53aGF0c0FwcExpbmt9JHtlbmNvZGVkfWAsICd3aGF0c0FwcFNoYXJlV2luZG93JywgJ2hlaWdodD00NTAsIHdpZHRoPTU1MCwgdG9wPScgKyAod2luZG93Lm91dGVySGVpZ2h0IC8gMiAtIDI3NSkgKyAnLCBsZWZ0PScgKyAod2luZG93LmlubmVyV2lkdGggLyAyIC0gMjI1KSArICcsIHRvb2xiYXI9MCwgbG9jYXRpb249MCwgbWVudWJhcj0wLCBkaXJlY3Rvcmllcz0wLCBzY3JvbGxiYXJzPTAnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBibGFua0NvbXBvbmVudCgpIHtcbiAgICBpZiAodGhpcy5pY29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMuaWNvbkltZztcbiAgICB9XG4gICAgaWYgKHRoaXMudXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuICAgIGlmICh0aGlzLndpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2lkdGggPSAnNTBweCc7XG4gICAgfVxuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJsYW5rQ29tcG9uZW50KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hZ2ljLW1haWwtc2hhcmUnLFxuICB0ZW1wbGF0ZTogYDxhIFxuICBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgXG4gIHRhcmdldD1cIl9ibGFua1wiIFxuICAoY2xpY2spPVwic2hhcmUoJGV2ZW50KVwiIFxuICBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOidpbmxpbmUtYmxvY2snLCAnd2lkdGgnOiB3aWR0aH1cIlxuPlxuICA8aW1nIFtzcmNdPVwiaWNvblwiPlxuPC9hPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIE5neE1hZ2ljTWFpbFNoYXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB1cmw7XG4gIEBJbnB1dCgpIGljb247XG4gIEBJbnB1dCgpIHdpZHRoO1xuICBASW5wdXQoKSBleHRyYVRleHQ7XG5cbiAgbWFpbExpbms6IGFueSA9ICdtYWlsdG86P2JvZHk9JztcbiAgaWNvbkltZzogYW55ID0gJ2h0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xODEvMTgxNTM1LnN2Zyc7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHNoYXJlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnVybCk7XG4gICAgd2luZG93Lm9wZW4oYCR7dGhpcy5tYWlsTGlua30ke3RoaXMuZXh0cmFUZXh0fSR7ZW5jb2RlZH1gLCAnbWFpbFNoYXJlV2luZG93JywgJ2hlaWdodD00NTAsIHdpZHRoPTU1MCwgdG9wPScgKyAod2luZG93Lm91dGVySGVpZ2h0IC8gMiAtIDI3NSkgKyAnLCBsZWZ0PScgKyAod2luZG93LmlubmVyV2lkdGggLyAyIC0gMjI1KSArICcsIHRvb2xiYXI9MCwgbG9jYXRpb249MCwgbWVudWJhcj0wLCBkaXJlY3Rvcmllcz0wLCBzY3JvbGxiYXJzPTAnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBibGFua0NvbXBvbmVudCgpIHtcbiAgICBpZiAodGhpcy5pY29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMuaWNvbkltZztcbiAgICB9XG4gICAgaWYgKHRoaXMudXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuICAgIGlmICh0aGlzLndpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2lkdGggPSAnNTBweCc7XG4gICAgfVxuICAgIGlmICh0aGlzLmV4dHJhVGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmV4dHJhVGV4dCA9ICdIZWxsbyEgaGVyZSBpcyB0aGUgYXdlc29tZSBsaW5rICc7XG4gICAgfVxuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJsYW5rQ29tcG9uZW50KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ3hNYWdpY0ZiU2hhcmVDb21wb25lbnQgfSBmcm9tICcuL25neC1tYWdpYy1mYi1zaGFyZS9uZ3gtbWFnaWMtZmItc2hhcmUuY29tcG9uZW50JztcbmltcG9ydCB7IE5neE1hZ2ljVHdpdHRTaGFyZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LW1hZ2ljLXR3aXR0LXNoYXJlL25neC1tYWdpYy10d2l0dC1zaGFyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4TWFnaWNHcGx1c1NoYXJlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtbWFnaWMtZ3BsdXMtc2hhcmUvbmd4LW1hZ2ljLWdwbHVzLXNoYXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hNYWdpY1doYXRzYXBwU2hhcmVDb21wb25lbnQgfSBmcm9tICcuL25neC1tYWdpYy13aGF0c2FwcC1zaGFyZS9uZ3gtbWFnaWMtd2hhdHNhcHAtc2hhcmUuY29tcG9uZW50JztcbmltcG9ydCB7IE5neE1hZ2ljTWFpbFNoYXJlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtbWFnaWMtbWFpbC1zaGFyZS9uZ3gtbWFnaWMtbWFpbC1zaGFyZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5neE1hZ2ljRmJTaGFyZUNvbXBvbmVudCxcbiAgICBOZ3hNYWdpY1R3aXR0U2hhcmVDb21wb25lbnQsXG4gICAgTmd4TWFnaWNHcGx1c1NoYXJlQ29tcG9uZW50LFxuICAgIE5neE1hZ2ljV2hhdHNhcHBTaGFyZUNvbXBvbmVudCxcbiAgICBOZ3hNYWdpY01haWxTaGFyZUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4TWFnaWNGYlNoYXJlQ29tcG9uZW50LFxuICAgIE5neE1hZ2ljVHdpdHRTaGFyZUNvbXBvbmVudCxcbiAgICBOZ3hNYWdpY0dwbHVzU2hhcmVDb21wb25lbnQsXG4gICAgTmd4TWFnaWNXaGF0c2FwcFNoYXJlQ29tcG9uZW50LFxuICAgIE5neE1hZ2ljTWFpbFNoYXJlQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWFnaWNTb2NpYWxTaGFyZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7SUF3QkU7c0JBSmMsK0NBQStDO3VCQUM5QyxxREFBcUQ7S0FHbkQ7Ozs7O0lBRWpCLEtBQUssQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLHVCQUFNLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFLEVBQUUsZUFBZSxFQUFFLDZCQUE2QixJQUFJLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLFNBQVMsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxpRUFBaUUsQ0FBQyxDQUFDO1FBQ3pPLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDMUI7UUFDRCxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7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