import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMagicMailShareComponent } from './ngx-magic-mail-share.component';

describe('NgxMagicMailShareComponent', () => {
  let component: NgxMagicMailShareComponent;
  let fixture: ComponentFixture<NgxMagicMailShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMagicMailShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMagicMailShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
