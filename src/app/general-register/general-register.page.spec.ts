import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRegisterPage } from './general-register.page';

describe('GeneralRegisterPage', () => {
  let component: GeneralRegisterPage;
  let fixture: ComponentFixture<GeneralRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
