import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMagicTwittShareComponent } from './ngx-magic-twitt-share.component';

describe('NgxMagicTwittShareComponent', () => {
  let component: NgxMagicTwittShareComponent;
  let fixture: ComponentFixture<NgxMagicTwittShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMagicTwittShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMagicTwittShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
