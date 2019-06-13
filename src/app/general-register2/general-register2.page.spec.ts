import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRegister2Page } from './general-register2.page';

describe('GeneralRegister2Page', () => {
  let component: GeneralRegister2Page;
  let fixture: ComponentFixture<GeneralRegister2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralRegister2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRegister2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
