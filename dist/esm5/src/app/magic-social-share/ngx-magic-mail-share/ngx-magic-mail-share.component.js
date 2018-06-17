/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var NgxMagicMailShareComponent = /** @class */ (function () {
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
        { type: Component, args: [{
                    selector: 'magic-mail-share',
                    template: "<a \n  href=\"javascript:void(0)\" \n  target=\"_blank\" \n  (click)=\"share($event)\" \n  [ngStyle]=\"{'display':'inline-block', 'width': width}\"\n>\n  <img [src]=\"icon\">\n</a>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    NgxMagicMailShareComponent.ctorParameters = function () { return []; };
    NgxMagicMailShareComponent.propDecorators = {
        url: [{ type: Input }],
        icon: [{ type: Input }],
        width: [{ type: Input }],
        extraText: [{ type: Input }]
    };
    return NgxMagicMailShareComponent;
}());
export { NgxMagicMailShareComponent };
function NgxMagicMailShareComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NgxMagicMailShareComponent.prototype.url;
    /** @type {?} */
    NgxMagicMailShareComponent.prototype.icon;
    /** @type {?} */
    NgxMagicMailShareComponent.prototype.width;
    /** @type {?} */
    NgxMagicMailShareComponent.prototype.extraText;
    /** @type {?} */
    NgxMagicMailShareComponent.prototype.mailLink;
    /** @type {?} */
    NgxMagicMailShareComponent.prototype.iconImg;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hZ2ljLW1haWwtc2hhcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hZ2ljLXNvY2lhbC1zaGFyZS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFnaWMtc29jaWFsLXNoYXJlL25neC1tYWdpYy1tYWlsLXNoYXJlL25neC1tYWdpYy1tYWlsLXNoYXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBMEJ2RDt3QkFKZ0IsZUFBZTt1QkFDaEIscURBQXFEO0tBR25EOzs7OztJQUVqQiwwQ0FBSzs7OztJQUFMLFVBQU0sQ0FBQztRQUNMLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixxQkFBTSxPQUFPLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBUyxFQUFFLGlCQUFpQixFQUFFLDZCQUE2QixHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsaUVBQWlFLENBQUMsQ0FBQztRQUM5UCxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7Ozs7SUFFRCxtREFBYzs7O0lBQWQ7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzFCO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDakM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7U0FDckI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQ0FBa0MsQ0FBQztTQUNyRDtLQUNGOzs7O0lBR0QsNkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOztnQkFuREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSx3TEFRWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7O3NCQUdFLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7O3FDQXBCUjs7U0FlYSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFnaWMtbWFpbC1zaGFyZScsXG4gIHRlbXBsYXRlOiBgPGEgXG4gIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBcbiAgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gIChjbGljayk9XCJzaGFyZSgkZXZlbnQpXCIgXG4gIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6J2lubGluZS1ibG9jaycsICd3aWR0aCc6IHdpZHRofVwiXG4+XG4gIDxpbWcgW3NyY109XCJpY29uXCI+XG48L2E+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4TWFnaWNNYWlsU2hhcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHVybDtcbiAgQElucHV0KCkgaWNvbjtcbiAgQElucHV0KCkgd2lkdGg7XG4gIEBJbnB1dCgpIGV4dHJhVGV4dDtcblxuICBtYWlsTGluazogYW55ID0gJ21haWx0bzo/Ym9keT0nO1xuICBpY29uSW1nOiBhbnkgPSAnaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE4MS8xODE1MzUuc3ZnJztcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2hhcmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMudXJsKTtcbiAgICB3aW5kb3cub3BlbihgJHt0aGlzLm1haWxMaW5rfSR7dGhpcy5leHRyYVRleHR9JHtlbmNvZGVkfWAsICdtYWlsU2hhcmVXaW5kb3cnLCAnaGVpZ2h0PTQ1MCwgd2lkdGg9NTUwLCB0b3A9JyArICh3aW5kb3cub3V0ZXJIZWlnaHQgLyAyIC0gMjc1KSArICcsIGxlZnQ9JyArICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSAyMjUpICsgJywgdG9vbGJhcj0wLCBsb2NhdGlvbj0wLCBtZW51YmFyPTAsIGRpcmVjdG9yaWVzPTAsIHNjcm9sbGJhcnM9MCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGJsYW5rQ29tcG9uZW50KCkge1xuICAgIGlmICh0aGlzLmljb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pY29uID0gdGhpcy5pY29uSW1nO1xuICAgIH1cbiAgICBpZiAodGhpcy51cmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9XG4gICAgaWYgKHRoaXMud2lkdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53aWR0aCA9ICc1MHB4JztcbiAgICB9XG4gICAgaWYgKHRoaXMuZXh0cmFUZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZXh0cmFUZXh0ID0gJ0hlbGxvISBoZXJlIGlzIHRoZSBhd2Vzb21lIGxpbmsgJztcbiAgICB9XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmxhbmtDb21wb25lbnQoKTtcbiAgfVxuXG59XG4iXX0=