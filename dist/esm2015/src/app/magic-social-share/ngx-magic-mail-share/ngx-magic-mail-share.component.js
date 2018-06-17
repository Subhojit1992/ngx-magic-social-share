/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class NgxMagicMailShareComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hZ2ljLW1haWwtc2hhcmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hZ2ljLXNvY2lhbC1zaGFyZS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFnaWMtc29jaWFsLXNoYXJlL25neC1tYWdpYy1tYWlsLXNoYXJlL25neC1tYWdpYy1tYWlsLXNoYXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFlekQsTUFBTTtJQVdKO3dCQUpnQixlQUFlO3VCQUNoQixxREFBcUQ7S0FHbkQ7Ozs7O0lBRWpCLEtBQUssQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLHVCQUFNLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSw2QkFBNkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGlFQUFpRSxDQUFDLENBQUM7UUFDOVAsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkOzs7O0lBRUQsY0FBYztRQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDMUI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztTQUNqQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUNyQjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLGtDQUFrQyxDQUFDO1NBQ3JEO0tBQ0Y7Ozs7SUFHRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Q0FRWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjs7Ozs7a0JBR0UsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYWdpYy1tYWlsLXNoYXJlJyxcbiAgdGVtcGxhdGU6IGA8YSBcbiAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIFxuICB0YXJnZXQ9XCJfYmxhbmtcIiBcbiAgKGNsaWNrKT1cInNoYXJlKCRldmVudClcIiBcbiAgW25nU3R5bGVdPVwieydkaXNwbGF5JzonaW5saW5lLWJsb2NrJywgJ3dpZHRoJzogd2lkdGh9XCJcbj5cbiAgPGltZyBbc3JjXT1cImljb25cIj5cbjwvYT5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYWdpY01haWxTaGFyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdXJsO1xuICBASW5wdXQoKSBpY29uO1xuICBASW5wdXQoKSB3aWR0aDtcbiAgQElucHV0KCkgZXh0cmFUZXh0O1xuXG4gIG1haWxMaW5rOiBhbnkgPSAnbWFpbHRvOj9ib2R5PSc7XG4gIGljb25JbWc6IGFueSA9ICdodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTgxLzE4MTUzNS5zdmcnO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBzaGFyZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy51cmwpO1xuICAgIHdpbmRvdy5vcGVuKGAke3RoaXMubWFpbExpbmt9JHt0aGlzLmV4dHJhVGV4dH0ke2VuY29kZWR9YCwgJ21haWxTaGFyZVdpbmRvdycsICdoZWlnaHQ9NDUwLCB3aWR0aD01NTAsIHRvcD0nICsgKHdpbmRvdy5vdXRlckhlaWdodCAvIDIgLSAyNzUpICsgJywgbGVmdD0nICsgKHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIyNSkgKyAnLCB0b29sYmFyPTAsIGxvY2F0aW9uPTAsIG1lbnViYXI9MCwgZGlyZWN0b3JpZXM9MCwgc2Nyb2xsYmFycz0wJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYmxhbmtDb21wb25lbnQoKSB7XG4gICAgaWYgKHRoaXMuaWNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmljb24gPSB0aGlzLmljb25JbWc7XG4gICAgfVxuICAgIGlmICh0aGlzLnVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWR0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndpZHRoID0gJzUwcHgnO1xuICAgIH1cbiAgICBpZiAodGhpcy5leHRyYVRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5leHRyYVRleHQgPSAnSGVsbG8hIGhlcmUgaXMgdGhlIGF3ZXNvbWUgbGluayAnO1xuICAgIH1cbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ibGFua0NvbXBvbmVudCgpO1xuICB9XG5cbn1cbiJdfQ==