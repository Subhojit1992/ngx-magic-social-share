import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMagicGplusShareComponent } from './ngx-magic-gplus-share.component';

describe('NgxMagicGplusShareComponent', () => {
  let component: NgxMagicGplusShareComponent;
  let fixture: ComponentFixture<NgxMagicGplusShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMagicGplusShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMagicGplusShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
