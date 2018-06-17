/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var NgxMagicWhatsappShareComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'magic-whatsapp-share',
                    template: "<a \n  href=\"javascript:void(0)\" \n  target=\"_blank\" \n  (click)=\"share($event)\" \n  [ngStyle]=\"{'display':'inline-block', 'width': width}\"\n>\n  <img [src]=\"icon\">\n</a>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    NgxMagicWhatsappShareComponent.ctorParameters = function () { return []; };
    NgxMagicWhatsappShareComponent.propDecorators = {
        url: [{ type: Input }],
        icon: [{ type: Input }],
        width: [{ type: Input }]
    };
    return NgxMagicWhatsappShareComponent;
}());
export { NgxMagicWhatsappShareComponent };
function NgxMagicWhatsappShareComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NgxMagicWhatsappShareComponent.prototype.url;
    /** @type {?} */
    NgxMagicWhatsappShareComponent.prototype.icon;
    /** @type {?} */
    NgxMagicWhatsappShareComponent.prototype.width;
    /** @type {?} */
    NgxMagicWhatsappShareComponent.prototype.whatsAppLink;
    /** @type {?} */
    NgxMagicWhatsappShareComponent.prototype.iconImg;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hZ2ljLXdoYXRzYXBwLXNoYXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYWdpYy1zb2NpYWwtc2hhcmUvIiwic291cmNlcyI6WyJzcmMvYXBwL21hZ2ljLXNvY2lhbC1zaGFyZS9uZ3gtbWFnaWMtd2hhdHNhcHAtc2hhcmUvbmd4LW1hZ2ljLXdoYXRzYXBwLXNoYXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBeUJ2RDs0QkFKb0IscUNBQXFDO3VCQUMxQyxxREFBcUQ7S0FHbkQ7Ozs7O0lBRWpCLDhDQUFLOzs7O0lBQUwsVUFBTSxDQUFDO1FBQ0wsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLHFCQUFNLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBUyxFQUFFLHFCQUFxQixFQUFFLDZCQUE2QixHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsaUVBQWlFLENBQUMsQ0FBQztRQUNyUCxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7Ozs7SUFFRCx1REFBYzs7O0lBQWQ7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzFCO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDakM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDckI7S0FDRjs7OztJQUdELGlEQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsd0xBUVg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7OztzQkFHRSxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7eUNBbkJSOztTQWVhLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYWdpYy13aGF0c2FwcC1zaGFyZScsXG4gIHRlbXBsYXRlOiBgPGEgXG4gIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBcbiAgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gIChjbGljayk9XCJzaGFyZSgkZXZlbnQpXCIgXG4gIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6J2lubGluZS1ibG9jaycsICd3aWR0aCc6IHdpZHRofVwiXG4+XG4gIDxpbWcgW3NyY109XCJpY29uXCI+XG48L2E+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TWFnaWNXaGF0c2FwcFNoYXJlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB1cmw7XG4gIEBJbnB1dCgpIGljb247XG4gIEBJbnB1dCgpIHdpZHRoO1xuXG4gIHdoYXRzQXBwTGluazogYW55ID0gJ2h0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3RleHQ9JztcbiAgaWNvbkltZzogYW55ID0gJ2h0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xMzQvMTM0OTM3LnN2Zyc7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHNoYXJlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnVybCk7XG4gICAgd2luZG93Lm9wZW4oYCR7dGhpcy53aGF0c0FwcExpbmt9JHtlbmNvZGVkfWAsICd3aGF0c0FwcFNoYXJlV2luZG93JywgJ2hlaWdodD00NTAsIHdpZHRoPTU1MCwgdG9wPScgKyAod2luZG93Lm91dGVySGVpZ2h0IC8gMiAtIDI3NSkgKyAnLCBsZWZ0PScgKyAod2luZG93LmlubmVyV2lkdGggLyAyIC0gMjI1KSArICcsIHRvb2xiYXI9MCwgbG9jYXRpb249MCwgbWVudWJhcj0wLCBkaXJlY3Rvcmllcz0wLCBzY3JvbGxiYXJzPTAnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBibGFua0NvbXBvbmVudCgpIHtcbiAgICBpZiAodGhpcy5pY29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaWNvbiA9IHRoaXMuaWNvbkltZztcbiAgICB9XG4gICAgaWYgKHRoaXMudXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuICAgIGlmICh0aGlzLndpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2lkdGggPSAnNTBweCc7XG4gICAgfVxuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJsYW5rQ29tcG9uZW50KCk7XG4gIH1cblxufVxuIl19