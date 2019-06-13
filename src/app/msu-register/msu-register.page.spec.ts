import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsuRegisterPage } from './msu-register.page';

describe('MsuRegisterPage', () => {
  let component: MsuRegisterPage;
  let fixture: ComponentFixture<MsuRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsuRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsuRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
