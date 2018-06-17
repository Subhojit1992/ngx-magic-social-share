/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class NgxMagicTwittShareComponent {
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
function NgxMagicTwittShareComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NgxMagicTwittShareComponent.prototype.url;
    /** @type {?} */
    NgxMagicTwittShareComponent.prototype.icon;
    /** @type {?} */
    NgxMagicTwittShareComponent.prototype.width;
    /** @type {?} */
    NgxMagicTwittShareComponent.prototype.twittLink;
    /** @type {?} */
    NgxMagicTwittShareComponent.prototype.iconImg;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hZ2ljLXR3aXR0LXNoYXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYWdpYy1zb2NpYWwtc2hhcmUvIiwic291cmNlcyI6WyJzcmMvYXBwL21hZ2ljLXNvY2lhbC1zaGFyZS9uZ3gtbWFnaWMtdHdpdHQtc2hhcmUvbmd4LW1hZ2ljLXR3aXR0LXNoYXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFlekQsTUFBTTtJQVVKO3lCQUppQixrQ0FBa0M7dUJBQ3BDLHFEQUFxRDtLQUduRDs7Ozs7SUFFakIsS0FBSyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsdUJBQU0sT0FBTyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSw2QkFBNkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGlFQUFpRSxDQUFDLENBQUM7UUFDL08sTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkOzs7O0lBRUQsY0FBYztRQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDMUI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztTQUNqQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUNyQjtLQUNGOzs7O0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7O0NBUVg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7Ozs7O2tCQUdFLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hZ2ljLXR3aXR0LXNoYXJlJyxcbiAgdGVtcGxhdGU6IGA8YSBcbiAgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIFxuICB0YXJnZXQ9XCJfYmxhbmtcIiBcbiAgKGNsaWNrKT1cInNoYXJlKCRldmVudClcIiBcbiAgW25nU3R5bGVdPVwieydkaXNwbGF5JzonaW5saW5lLWJsb2NrJywgJ3dpZHRoJzogd2lkdGh9XCJcbj5cbiAgPGltZyBbc3JjXT1cImljb25cIj5cbjwvYT5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYWdpY1R3aXR0U2hhcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHVybDtcbiAgQElucHV0KCkgaWNvbjtcbiAgQElucHV0KCkgd2lkdGg7XG5cbiAgdHdpdHRMaW5rOiBhbnkgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbS9ob21lP3N0YXR1cz0nO1xuICBpY29uSW1nOiBhbnkgPSAnaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0NS8xNDU4MTIuc3ZnJztcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc2hhcmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMudXJsKTtcbiAgICB3aW5kb3cub3BlbihgJHt0aGlzLnR3aXR0TGlua30ke2VuY29kZWR9YCwgJ3R3aXR0U2hhcmVXaW5kb3cnLCAnaGVpZ2h0PTQ1MCwgd2lkdGg9NTUwLCB0b3A9JyArICh3aW5kb3cub3V0ZXJIZWlnaHQgLyAyIC0gMjc1KSArICcsIGxlZnQ9JyArICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSAyMjUpICsgJywgdG9vbGJhcj0wLCBsb2NhdGlvbj0wLCBtZW51YmFyPTAsIGRpcmVjdG9yaWVzPTAsIHNjcm9sbGJhcnM9MCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGJsYW5rQ29tcG9uZW50KCkge1xuICAgIGlmICh0aGlzLmljb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pY29uID0gdGhpcy5pY29uSW1nO1xuICAgIH1cbiAgICBpZiAodGhpcy51cmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9XG4gICAgaWYgKHRoaXMud2lkdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53aWR0aCA9ICc1MHB4JztcbiAgICB9XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmxhbmtDb21wb25lbnQoKTtcbiAgfVxuXG59XG4iXX0=