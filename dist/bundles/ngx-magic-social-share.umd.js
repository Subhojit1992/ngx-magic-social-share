(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-magic-social-share', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['ngx-magic-social-share'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxMagicFbShareComponent = (function () {
        function NgxMagicFbShareComponent() {
            this.fbLink = 'https://www.facebook.com/sharer/sharer.php?u=';
            this.iconImg = 'https://image.flaticon.com/icons/svg/179/179319.svg';
        }
        /**
         * @param {?} e
         * @return {?}
         */
        NgxMagicFbShareComponent.prototype.share = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                e.preventDefault();
                var /** @type {?} */ encoded = encodeURIComponent(this.url);
                window.open("" + this.fbLink + encoded, 'fbShareWindow', 'height=450, width=550, top=' + (window.outerHeight / 2 - 275) + ', left=' + (window.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
                return false;
            };
        /**
         * @return {?}
         */
        NgxMagicFbShareComponent.prototype.blankComponent = /**
         * @return {?}
         */
            function () {
                if (this.icon === undefined) {
                    this.icon = this.iconImg;
                }
                if (this.url === undefined) {
                    this.url = window.location.href;
                }
                if (this.width === undefined) {
                    this.width = '50px';
                }
            };
        /**
         * @return {?}
         */
        NgxMagicFbShareComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.blankComponent();
            };
        NgxMagicFbShareComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'magic-fb-share',
                        template: "<a \n  href=\"javascript:void(0)\" \n  target=\"_blank\" \n  (click)=\"share($event)\" \n  [ngStyle]=\"{'display':'inline-block', 'width': width}\"\n>\n  <img [src]=\"icon\">\n</a>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        NgxMagicFbShareComponent.ctorParameters = function () { return []; };
        NgxMagicFbShareComponent.propDecorators = {
            url: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            width: [{ type: core.Input }]
        };
        return NgxMagicFbShareComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxMagicTwittShareComponent = (function () {
        function NgxMagicTwittShareComponent() {
            this.twittLink = 'https://twitter.com/home?status=';
            this.iconImg = 'https://image.flaticon.com/icons/svg/145/145812.svg';
        }
        /**
         * @param {?} e
         * @return {?}
         */
        NgxMagicTwittShareComponent.prototype.share = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                e.preventDefault();
                var /** @type {?} */ encoded = encodeURIComponent(this.url);
                window.open("" + this.twittLink + encoded, 'twittShareWindow', 'height=450, width=550, top=' + (window.outerHeight / 2 - 275) + ', left=' + (window.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
                return false;
            };
        /**
         * @return {?}
         */
        NgxMagicTwittShareComponent.prototype.blankComponent = /**
         * @return {?}
         */
            function () {
                if (this.icon === undefined) {
                    this.icon = this.iconImg;
                }
                if (this.url === undefined) {
                    this.url = window.location.href;
                }
                if (this.width === undefined) {
                    this.width = '50px';
                }
            };
        /**
         * @return {?}
         */
        NgxMagicTwittShareComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.blankComponent();
            };
        NgxMagicTwittShareComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'magic-twitt-share',
                        template: "<a \n  href=\"javascript:void(0)\" \n  target=\"_blank\" \n  (click)=\"share($event)\" \n  [ngStyle]=\"{'display':'inline-block', 'width': width}\"\n>\n  <img [src]=\"icon\">\n</a>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        NgxMagicTwittShareComponent.ctorParameters = function () { return []; };
        NgxMagicTwittShareComponent.propDecorators = {
            url: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            width: [{ type: core.Input }]
        };
        return NgxMagicTwittShareComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxMagicGplusShareComponent = (function () {
        function NgxMagicGplusShareComponent() {
            this.gPlusLink = 'https://plus.google.com/share?url=';
            this.iconImg = 'https://image.flaticon.com/icons/svg/145/145804.svg';
        }
        /**
         * @param {?} e
         * @return {?}
         */
        NgxMagicGplusShareComponent.prototype.share = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                e.preventDefault();
                var /** @type {?} */ encoded = encodeURIComponent(this.url);
                window.open("" + this.gPlusLink + encoded, 'gPlusShareWindow', 'height=450, width=550, top=' + (window.outerHeight / 2 - 275) + ', left=' + (window.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
                return false;
            };
        /**
         * @return {?}
         */
        NgxMagicGplusShareComponent.prototype.blankComponent = /**
         * @return {?}
         */
            function () {
                if (this.icon === undefined) {
                    this.icon = this.iconImg;
                }
                if (this.url === undefined) {
                    this.url = window.location.href;
                }
                if (this.width === undefined) {
                    this.width = '50px';
                }
            };
        /**
         * @return {?}
         */
        NgxMagicGplusShareComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.blankComponent();
            };
        NgxMagicGplusShareComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'magic-gplus-share',
                        template: "<a \n  href=\"javascript:void(0)\" \n  target=\"_blank\" \n  (click)=\"share($event)\" \n  [ngStyle]=\"{'display':'inline-block', 'width': width}\"\n>\n  <img [src]=\"icon\">\n</a>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        NgxMagicGplusShareComponent.ctorParameters = function () { return []; };
        NgxMagicGplusShareComponent.propDecorators = {
            url: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            width: [{ type: core.Input }]
        };
        return NgxMagicGplusShareComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxMagicWhatsappShareComponent = (function () {
        function NgxMagicWhatsappShareComponent() {
            this.whatsAppLink = 'https://api.whatsapp.com/send?text=';
            this.iconImg = 'https://image.flaticon.com/icons/svg/134/134937.svg';
        }
        /**
         * @param {?} e
         * @return {?}
         */
        NgxMagicWhatsappShareComponent.prototype.share = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                e.preventDefault();
                var /** @type {?} */ encoded = encodeURIComponent(this.url);
                window.open("" + this.whatsAppLink + encoded, 'whatsAppShareWindow', 'height=450, width=550, top=' + (window.outerHeight / 2 - 275) + ', left=' + (window.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
                return false;
            };
        /**
         * @return {?}
         */
        NgxMagicWhatsappShareComponent.prototype.blankComponent = /**
         * @return {?}
         */
            function () {
                if (this.icon === undefined) {
                    this.icon = this.iconImg;
                }
                if (this.url === undefined) {
                    this.url = window.location.href;
                }
                if (this.width === undefined) {
                    this.width = '50px';
                }
            };
        /**
         * @return {?}
         */
        NgxMagicWhatsappShareComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.blankComponent();
            };
        NgxMagicWhatsappShareComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'magic-whatsapp-share',
                        template: "<a \n  href=\"javascript:void(0)\" \n  target=\"_blank\" \n  (click)=\"share($event)\" \n  [ngStyle]=\"{'display':'inline-block', 'width': width}\"\n>\n  <img [src]=\"icon\">\n</a>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        NgxMagicWhatsappShareComponent.ctorParameters = function () { return []; };
        NgxMagicWhatsappShareComponent.propDecorators = {
            url: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            width: [{ type: core.Input }]
        };
        return NgxMagicWhatsappShareComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var NgxMagicMailShareComponent = (function () {
        function NgxMagicMailShareComponent() {
            this.mailLink = 'mailto:?body=';
            this.iconImg = 'https://image.flaticon.com/icons/svg/181/181535.svg';
        }
        /**
         * @param {?} e
         * @return {?}
         */
        NgxMagicMailShareComponent.prototype.share = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                e.preventDefault();
                var /** @type {?} */ encoded = encodeURIComponent(this.url);
                window.open("" + this.mailLink + this.extraText + encoded, 'mailShareWindow', 'height=450, width=550, top=' + (window.outerHeight / 2 - 275) + ', left=' + (window.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
                return false;
            };
        /**
         * @return {?}
         */
        NgxMagicMailShareComponent.prototype.blankComponent = /**
         * @return {?}
         */
            function () {
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
            };
        /**
         * @return {?}
         */
        NgxMagicMailShareComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.blankComponent();
            };
        NgxMagicMailShareComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'magic-mail-share',
                        template: "<a \n  href=\"javascript:void(0)\" \n  target=\"_blank\" \n  (click)=\"share($event)\" \n  [ngStyle]=\"{'display':'inline-block', 'width': width}\"\n>\n  <img [src]=\"icon\">\n</a>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        NgxMagicMailShareComponent.ctorParameters = function () { return []; };
        NgxMagicMailShareComponent.propDecorators = {
            url: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            width: [{ type: core.Input }],
            extraText: [{ type: core.Input }]
        };
        return NgxMagicMailShareComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MagicSocialShareModule = (function () {
        function MagicSocialShareModule() {
        }
        MagicSocialShareModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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
        return MagicSocialShareModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.MagicSocialShareModule = MagicSocialShareModule;
    exports.ɵa = NgxMagicFbShareComponent;
    exports.ɵc = NgxMagicGplusShareComponent;
    exports.ɵe = NgxMagicMailShareComponent;
    exports.ɵb = NgxMagicTwittShareComponent;
    exports.ɵd = NgxMagicWhatsappShareComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hZ2ljLXNvY2lhbC1zaGFyZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1tYWdpYy1zb2NpYWwtc2hhcmUvc3JjL2FwcC9tYWdpYy1zb2NpYWwtc2hhcmUvbmd4LW1hZ2ljLWZiLXNoYXJlL25neC1tYWdpYy1mYi1zaGFyZS5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy1zb2NpYWwtc2hhcmUvc3JjL2FwcC9tYWdpYy1zb2NpYWwtc2hhcmUvbmd4LW1hZ2ljLXR3aXR0LXNoYXJlL25neC1tYWdpYy10d2l0dC1zaGFyZS5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy1zb2NpYWwtc2hhcmUvc3JjL2FwcC9tYWdpYy1zb2NpYWwtc2hhcmUvbmd4LW1hZ2ljLWdwbHVzLXNoYXJlL25neC1tYWdpYy1ncGx1cy1zaGFyZS5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy1zb2NpYWwtc2hhcmUvc3JjL2FwcC9tYWdpYy1zb2NpYWwtc2hhcmUvbmd4LW1hZ2ljLXdoYXRzYXBwLXNoYXJlL25neC1tYWdpYy13aGF0c2FwcC1zaGFyZS5jb21wb25lbnQudHMiLCJuZzovL25neC1tYWdpYy1zb2NpYWwtc2hhcmUvc3JjL2FwcC9tYWdpYy1zb2NpYWwtc2hhcmUvbmd4LW1hZ2ljLW1haWwtc2hhcmUvbmd4LW1hZ2ljLW1haWwtc2hhcmUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWFnaWMtc29jaWFsLXNoYXJlL3NyYy9hcHAvbWFnaWMtc29jaWFsLXNoYXJlL21hZ2ljLXNvY2lhbC1zaGFyZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hZ2ljLWZiLXNoYXJlJyxcbiAgdGVtcGxhdGU6IGA8YSBcbiAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIFxuICB0YXJnZXQ9XCJfYmxhbmtcIiBcbiAgKGNsaWNrKT1cInNoYXJlKCRldmVudClcIiBcbiAgW25nU3R5bGVdPVwieydkaXNwbGF5JzonaW5saW5lLWJsb2NrJywgJ3dpZHRoJzogd2lkdGh9XCJcbj5cbiAgPGltZyBbc3JjXT1cImljb25cIj5cbjwvYT5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYWdpY0ZiU2hhcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB1cmw7XG4gIEBJbnB1dCgpIGljb247XG4gIEBJbnB1dCgpIHdpZHRoO1xuXG4gIGZiTGluazogYW55ID0gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSc7XG4gIGljb25JbWc6IGFueSA9ICdodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTc5LzE3OTMxOS5zdmcnO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBzaGFyZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy51cmwpO1xuICAgIHdpbmRvdy5vcGVuKGAke3RoaXMuZmJMaW5rfSR7ZW5jb2RlZH1gLCAnZmJTaGFyZVdpbmRvdycsICdoZWlnaHQ9NDUwLCB3aWR0aD01NTAsIHRvcD0nICsgKHdpbmRvdy5vdXRlckhlaWdodCAvIDIgLSAyNzUpICsgJywgbGVmdD0nICsgKHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIyNSkgKyAnLCB0b29sYmFyPTAsIGxvY2F0aW9uPTAsIG1lbnViYXI9MCwgZGlyZWN0b3JpZXM9MCwgc2Nyb2xsYmFycz0wJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYmxhbmtDb21wb25lbnQoKSB7XG4gICAgaWYgKHRoaXMuaWNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmljb24gPSB0aGlzLmljb25JbWc7XG4gICAgfVxuICAgIGlmICh0aGlzLnVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWR0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndpZHRoID0gJzUwcHgnO1xuICAgIH1cbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ibGFua0NvbXBvbmVudCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYWdpYy10d2l0dC1zaGFyZScsXG4gIHRlbXBsYXRlOiBgPGEgXG4gIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBcbiAgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gIChjbGljayk9XCJzaGFyZSgkZXZlbnQpXCIgXG4gIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6J2lubGluZS1ibG9jaycsICd3aWR0aCc6IHdpZHRofVwiXG4+XG4gIDxpbWcgW3NyY109XCJpY29uXCI+XG48L2E+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TWFnaWNUd2l0dFNoYXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB1cmw7XG4gIEBJbnB1dCgpIGljb247XG4gIEBJbnB1dCgpIHdpZHRoO1xuXG4gIHR3aXR0TGluazogYW55ID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vaG9tZT9zdGF0dXM9JztcbiAgaWNvbkltZzogYW55ID0gJ2h0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDUvMTQ1ODEyLnN2Zyc7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHNoYXJlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnVybCk7XG4gICAgd2luZG93Lm9wZW4oYCR7dGhpcy50d2l0dExpbmt9JHtlbmNvZGVkfWAsICd0d2l0dFNoYXJlV2luZG93JywgJ2hlaWdodD00NTAsIHdpZHRoPTU1MCwgdG9wPScgKyAod2luZG93Lm91dGVySGVpZ2h0IC8gMiAtIDI3NSkgKyAnLCBsZWZ0PScgKyAod2luZG93LmlubmVyV2lkdGggLyAyIC0gMjI1KSArICcsIHRvb2xiYXI9MCwgbG9jYXRpb249MCwgbWVudWJhcj0wLCBkaXJlY3Rvcmllcz0wLCBzY3JvbGxiYXJzPTAnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBibGFua0NvbXBvbmVudCgpIHtcbiAgICBpZiAodGhpcy5pY29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMuaWNvbkltZztcbiAgICB9XG4gICAgaWYgKHRoaXMudXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuICAgIGlmICh0aGlzLndpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2lkdGggPSAnNTBweCc7XG4gICAgfVxuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJsYW5rQ29tcG9uZW50KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hZ2ljLWdwbHVzLXNoYXJlJyxcbiAgdGVtcGxhdGU6IGA8YSBcbiAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIFxuICB0YXJnZXQ9XCJfYmxhbmtcIiBcbiAgKGNsaWNrKT1cInNoYXJlKCRldmVudClcIiBcbiAgW25nU3R5bGVdPVwieydkaXNwbGF5JzonaW5saW5lLWJsb2NrJywgJ3dpZHRoJzogd2lkdGh9XCJcbj5cbiAgPGltZyBbc3JjXT1cImljb25cIj5cbjwvYT5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYWdpY0dwbHVzU2hhcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB1cmw7XG4gIEBJbnB1dCgpIGljb247XG4gIEBJbnB1dCgpIHdpZHRoO1xuXG4gIGdQbHVzTGluazogYW55ID0gJ2h0dHBzOi8vcGx1cy5nb29nbGUuY29tL3NoYXJlP3VybD0nO1xuICBpY29uSW1nOiBhbnkgPSAnaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0NS8xNDU4MDQuc3ZnJztcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2hhcmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMudXJsKTtcbiAgICB3aW5kb3cub3BlbihgJHt0aGlzLmdQbHVzTGlua30ke2VuY29kZWR9YCwgJ2dQbHVzU2hhcmVXaW5kb3cnLCAnaGVpZ2h0PTQ1MCwgd2lkdGg9NTUwLCB0b3A9JyArICh3aW5kb3cub3V0ZXJIZWlnaHQgLyAyIC0gMjc1KSArICcsIGxlZnQ9JyArICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSAyMjUpICsgJywgdG9vbGJhcj0wLCBsb2NhdGlvbj0wLCBtZW51YmFyPTAsIGRpcmVjdG9yaWVzPTAsIHNjcm9sbGJhcnM9MCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGJsYW5rQ29tcG9uZW50KCkge1xuICAgIGlmICh0aGlzLmljb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pY29uID0gdGhpcy5pY29uSW1nO1xuICAgIH1cbiAgICBpZiAodGhpcy51cmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9XG4gICAgaWYgKHRoaXMud2lkdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53aWR0aCA9ICc1MHB4JztcbiAgICB9XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmxhbmtDb21wb25lbnQoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFnaWMtd2hhdHNhcHAtc2hhcmUnLFxuICB0ZW1wbGF0ZTogYDxhIFxuICBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgXG4gIHRhcmdldD1cIl9ibGFua1wiIFxuICAoY2xpY2spPVwic2hhcmUoJGV2ZW50KVwiIFxuICBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOidpbmxpbmUtYmxvY2snLCAnd2lkdGgnOiB3aWR0aH1cIlxuPlxuICA8aW1nIFtzcmNdPVwiaWNvblwiPlxuPC9hPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIE5neE1hZ2ljV2hhdHNhcHBTaGFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdXJsO1xuICBASW5wdXQoKSBpY29uO1xuICBASW5wdXQoKSB3aWR0aDtcblxuICB3aGF0c0FwcExpbms6IGFueSA9ICdodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD90ZXh0PSc7XG4gIGljb25JbWc6IGFueSA9ICdodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTM0LzEzNDkzNy5zdmcnO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBzaGFyZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy51cmwpO1xuICAgIHdpbmRvdy5vcGVuKGAke3RoaXMud2hhdHNBcHBMaW5rfSR7ZW5jb2RlZH1gLCAnd2hhdHNBcHBTaGFyZVdpbmRvdycsICdoZWlnaHQ9NDUwLCB3aWR0aD01NTAsIHRvcD0nICsgKHdpbmRvdy5vdXRlckhlaWdodCAvIDIgLSAyNzUpICsgJywgbGVmdD0nICsgKHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIyNSkgKyAnLCB0b29sYmFyPTAsIGxvY2F0aW9uPTAsIG1lbnViYXI9MCwgZGlyZWN0b3JpZXM9MCwgc2Nyb2xsYmFycz0wJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYmxhbmtDb21wb25lbnQoKSB7XG4gICAgaWYgKHRoaXMuaWNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmljb24gPSB0aGlzLmljb25JbWc7XG4gICAgfVxuICAgIGlmICh0aGlzLnVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWR0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndpZHRoID0gJzUwcHgnO1xuICAgIH1cbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ibGFua0NvbXBvbmVudCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYWdpYy1tYWlsLXNoYXJlJyxcbiAgdGVtcGxhdGU6IGA8YSBcbiAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIFxuICB0YXJnZXQ9XCJfYmxhbmtcIiBcbiAgKGNsaWNrKT1cInNoYXJlKCRldmVudClcIiBcbiAgW25nU3R5bGVdPVwieydkaXNwbGF5JzonaW5saW5lLWJsb2NrJywgJ3dpZHRoJzogd2lkdGh9XCJcbj5cbiAgPGltZyBbc3JjXT1cImljb25cIj5cbjwvYT5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYWdpY01haWxTaGFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdXJsO1xuICBASW5wdXQoKSBpY29uO1xuICBASW5wdXQoKSB3aWR0aDtcbiAgQElucHV0KCkgZXh0cmFUZXh0O1xuXG4gIG1haWxMaW5rOiBhbnkgPSAnbWFpbHRvOj9ib2R5PSc7XG4gIGljb25JbWc6IGFueSA9ICdodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTgxLzE4MTUzNS5zdmcnO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBzaGFyZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy51cmwpO1xuICAgIHdpbmRvdy5vcGVuKGAke3RoaXMubWFpbExpbmt9JHt0aGlzLmV4dHJhVGV4dH0ke2VuY29kZWR9YCwgJ21haWxTaGFyZVdpbmRvdycsICdoZWlnaHQ9NDUwLCB3aWR0aD01NTAsIHRvcD0nICsgKHdpbmRvdy5vdXRlckhlaWdodCAvIDIgLSAyNzUpICsgJywgbGVmdD0nICsgKHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIyNSkgKyAnLCB0b29sYmFyPTAsIGxvY2F0aW9uPTAsIG1lbnViYXI9MCwgZGlyZWN0b3JpZXM9MCwgc2Nyb2xsYmFycz0wJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYmxhbmtDb21wb25lbnQoKSB7XG4gICAgaWYgKHRoaXMuaWNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmljb24gPSB0aGlzLmljb25JbWc7XG4gICAgfVxuICAgIGlmICh0aGlzLnVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWR0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndpZHRoID0gJzUwcHgnO1xuICAgIH1cbiAgICBpZiAodGhpcy5leHRyYVRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5leHRyYVRleHQgPSAnSGVsbG8hIGhlcmUgaXMgdGhlIGF3ZXNvbWUgbGluayAnO1xuICAgIH1cbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ibGFua0NvbXBvbmVudCgpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmd4TWFnaWNGYlNoYXJlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtbWFnaWMtZmItc2hhcmUvbmd4LW1hZ2ljLWZiLXNoYXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hNYWdpY1R3aXR0U2hhcmVDb21wb25lbnQgfSBmcm9tICcuL25neC1tYWdpYy10d2l0dC1zaGFyZS9uZ3gtbWFnaWMtdHdpdHQtc2hhcmUuY29tcG9uZW50JztcbmltcG9ydCB7IE5neE1hZ2ljR3BsdXNTaGFyZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LW1hZ2ljLWdwbHVzLXNoYXJlL25neC1tYWdpYy1ncGx1cy1zaGFyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4TWFnaWNXaGF0c2FwcFNoYXJlQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtbWFnaWMtd2hhdHNhcHAtc2hhcmUvbmd4LW1hZ2ljLXdoYXRzYXBwLXNoYXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hNYWdpY01haWxTaGFyZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LW1hZ2ljLW1haWwtc2hhcmUvbmd4LW1hZ2ljLW1haWwtc2hhcmUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ3hNYWdpY0ZiU2hhcmVDb21wb25lbnQsXG4gICAgTmd4TWFnaWNUd2l0dFNoYXJlQ29tcG9uZW50LFxuICAgIE5neE1hZ2ljR3BsdXNTaGFyZUNvbXBvbmVudCxcbiAgICBOZ3hNYWdpY1doYXRzYXBwU2hhcmVDb21wb25lbnQsXG4gICAgTmd4TWFnaWNNYWlsU2hhcmVDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5neE1hZ2ljRmJTaGFyZUNvbXBvbmVudCxcbiAgICBOZ3hNYWdpY1R3aXR0U2hhcmVDb21wb25lbnQsXG4gICAgTmd4TWFnaWNHcGx1c1NoYXJlQ29tcG9uZW50LFxuICAgIE5neE1hZ2ljV2hhdHNhcHBTaGFyZUNvbXBvbmVudCxcbiAgICBOZ3hNYWdpY01haWxTaGFyZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hZ2ljU29jaWFsU2hhcmVNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBd0JFOzBCQUpjLCtDQUErQzsyQkFDOUMscURBQXFEO1NBR25EOzs7OztRQUVqQix3Q0FBSzs7OztZQUFMLFVBQU0sQ0FBQztnQkFDTCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLHFCQUFNLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQVMsRUFBRSxlQUFlLEVBQUUsNkJBQTZCLElBQUksTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsU0FBUyxJQUFJLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGlFQUFpRSxDQUFDLENBQUM7Z0JBQ3pPLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7Ozs7UUFFRCxpREFBYzs7O1lBQWQ7Z0JBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUMxQjtnQkFDRCxJQUFJLElBQUksQ0FBQyxHQUFH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