/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class NgxMagicFbShareComponent {
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
function NgxMagicFbShareComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NgxMagicFbShareComponent.prototype.url;
    /** @type {?} */
    NgxMagicFbShareComponent.prototype.icon;
    /** @type {?} */
    NgxMagicFbShareComponent.prototype.width;
    /** @type {?} */
    NgxMagicFbShareComponent.prototype.fbLink;
    /** @type {?} */
    NgxMagicFbShareComponent.prototype.iconImg;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hZ2ljLWZiLXNoYXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYWdpYy1zb2NpYWwtc2hhcmUvIiwic291cmNlcyI6WyJzcmMvYXBwL21hZ2ljLXNvY2lhbC1zaGFyZS9uZ3gtbWFnaWMtZmItc2hhcmUvbmd4LW1hZ2ljLWZiLXNoYXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFlekQsTUFBTTtJQVNKO3NCQUpjLCtDQUErQzt1QkFDOUMscURBQXFEO0tBR25EOzs7OztJQUVqQixLQUFLLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQix1QkFBTSxPQUFPLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFBRSxFQUFFLGVBQWUsRUFBRSw2QkFBNkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGlFQUFpRSxDQUFDLENBQUM7UUFDek8sTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkOzs7O0lBRUQsY0FBYztRQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDMUI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztTQUNqQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUNyQjtLQUNGOzs7O0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7O0NBUVg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7O2tCQUVFLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hZ2ljLWZiLXNoYXJlJyxcbiAgdGVtcGxhdGU6IGA8YSBcbiAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIFxuICB0YXJnZXQ9XCJfYmxhbmtcIiBcbiAgKGNsaWNrKT1cInNoYXJlKCRldmVudClcIiBcbiAgW25nU3R5bGVdPVwieydkaXNwbGF5JzonaW5saW5lLWJsb2NrJywgJ3dpZHRoJzogd2lkdGh9XCJcbj5cbiAgPGltZyBbc3JjXT1cImljb25cIj5cbjwvYT5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYWdpY0ZiU2hhcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB1cmw7XG4gIEBJbnB1dCgpIGljb247XG4gIEBJbnB1dCgpIHdpZHRoO1xuXG4gIGZiTGluazogYW55ID0gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PSc7XG4gIGljb25JbWc6IGFueSA9ICdodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTc5LzE3OTMxOS5zdmcnO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBzaGFyZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy51cmwpO1xuICAgIHdpbmRvdy5vcGVuKGAke3RoaXMuZmJMaW5rfSR7ZW5jb2RlZH1gLCAnZmJTaGFyZVdpbmRvdycsICdoZWlnaHQ9NDUwLCB3aWR0aD01NTAsIHRvcD0nICsgKHdpbmRvdy5vdXRlckhlaWdodCAvIDIgLSAyNzUpICsgJywgbGVmdD0nICsgKHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDIyNSkgKyAnLCB0b29sYmFyPTAsIGxvY2F0aW9uPTAsIG1lbnViYXI9MCwgZGlyZWN0b3JpZXM9MCwgc2Nyb2xsYmFycz0wJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgYmxhbmtDb21wb25lbnQoKSB7XG4gICAgaWYgKHRoaXMuaWNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmljb24gPSB0aGlzLmljb25JbWc7XG4gICAgfVxuICAgIGlmICh0aGlzLnVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbiAgICBpZiAodGhpcy53aWR0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndpZHRoID0gJzUwcHgnO1xuICAgIH1cbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ibGFua0NvbXBvbmVudCgpO1xuICB9XG5cbn1cbiJdfQ==