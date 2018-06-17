/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var NgxMagicGplusShareComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'magic-gplus-share',
                    template: "<a \n  href=\"javascript:void(0)\" \n  target=\"_blank\" \n  (click)=\"share($event)\" \n  [ngStyle]=\"{'display':'inline-block', 'width': width}\"\n>\n  <img [src]=\"icon\">\n</a>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    NgxMagicGplusShareComponent.ctorParameters = function () { return []; };
    NgxMagicGplusShareComponent.propDecorators = {
        url: [{ type: Input }],
        icon: [{ type: Input }],
        width: [{ type: Input }]
    };
    return NgxMagicGplusShareComponent;
}());
export { NgxMagicGplusShareComponent };
function NgxMagicGplusShareComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NgxMagicGplusShareComponent.prototype.url;
    /** @type {?} */
    NgxMagicGplusShareComponent.prototype.icon;
    /** @type {?} */
    NgxMagicGplusShareComponent.prototype.width;
    /** @type {?} */
    NgxMagicGplusShareComponent.prototype.gPlusLink;
    /** @type {?} */
    NgxMagicGplusShareComponent.prototype.iconImg;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hZ2ljLWdwbHVzLXNoYXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYWdpYy1zb2NpYWwtc2hhcmUvIiwic291cmNlcyI6WyJzcmMvYXBwL21hZ2ljLXNvY2lhbC1zaGFyZS9uZ3gtbWFnaWMtZ3BsdXMtc2hhcmUvbmd4LW1hZ2ljLWdwbHVzLXNoYXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBd0J2RDt5QkFKaUIsb0NBQW9DO3VCQUN0QyxxREFBcUQ7S0FHbkQ7Ozs7O0lBRWpCLDJDQUFLOzs7O0lBQUwsVUFBTSxDQUFDO1FBQ0wsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLHFCQUFNLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBUyxFQUFFLGtCQUFrQixFQUFFLDZCQUE2QixHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsaUVBQWlFLENBQUMsQ0FBQztRQUMvTyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7Ozs7SUFFRCxvREFBYzs7O0lBQWQ7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzFCO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDakM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDckI7S0FDRjs7OztJQUdELDhDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7Z0JBOUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsd0xBUVg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7OztzQkFFRSxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7c0NBbEJSOztTQWVhLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYWdpYy1ncGx1cy1zaGFyZScsXG4gIHRlbXBsYXRlOiBgPGEgXG4gIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBcbiAgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gIChjbGljayk9XCJzaGFyZSgkZXZlbnQpXCIgXG4gIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6J2lubGluZS1ibG9jaycsICd3aWR0aCc6IHdpZHRofVwiXG4+XG4gIDxpbWcgW3NyY109XCJpY29uXCI+XG48L2E+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TWFnaWNHcGx1c1NoYXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdXJsO1xuICBASW5wdXQoKSBpY29uO1xuICBASW5wdXQoKSB3aWR0aDtcblxuICBnUGx1c0xpbms6IGFueSA9ICdodHRwczovL3BsdXMuZ29vZ2xlLmNvbS9zaGFyZT91cmw9JztcbiAgaWNvbkltZzogYW55ID0gJ2h0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDUvMTQ1ODA0LnN2Zyc7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHNoYXJlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnVybCk7XG4gICAgd2luZG93Lm9wZW4oYCR7dGhpcy5nUGx1c0xpbmt9JHtlbmNvZGVkfWAsICdnUGx1c1NoYXJlV2luZG93JywgJ2hlaWdodD00NTAsIHdpZHRoPTU1MCwgdG9wPScgKyAod2luZG93Lm91dGVySGVpZ2h0IC8gMiAtIDI3NSkgKyAnLCBsZWZ0PScgKyAod2luZG93LmlubmVyV2lkdGggLyAyIC0gMjI1KSArICcsIHRvb2xiYXI9MCwgbG9jYXRpb249MCwgbWVudWJhcj0wLCBkaXJlY3Rvcmllcz0wLCBzY3JvbGxiYXJzPTAnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBibGFua0NvbXBvbmVudCgpIHtcbiAgICBpZiAodGhpcy5pY29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMuaWNvbkltZztcbiAgICB9XG4gICAgaWYgKHRoaXMudXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuICAgIGlmICh0aGlzLndpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2lkdGggPSAnNTBweCc7XG4gICAgfVxuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJsYW5rQ29tcG9uZW50KCk7XG4gIH1cblxufVxuIl19