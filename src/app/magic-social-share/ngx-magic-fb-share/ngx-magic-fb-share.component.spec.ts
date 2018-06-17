import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMagicFbShareComponent } from './ngx-magic-fb-share.component';

describe('NgxMagicFbShareComponent', () => {
  let component: NgxMagicFbShareComponent;
  let fixture: ComponentFixture<NgxMagicFbShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMagicFbShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMagicFbShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
