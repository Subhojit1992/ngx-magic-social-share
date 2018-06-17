import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMagicWhatsappShareComponent } from './ngx-magic-whatsapp-share.component';

describe('NgxMagicWhatsappShareComponent', () => {
  let component: NgxMagicWhatsappShareComponent;
  let fixture: ComponentFixture<NgxMagicWhatsappShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMagicWhatsappShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMagicWhatsappShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
