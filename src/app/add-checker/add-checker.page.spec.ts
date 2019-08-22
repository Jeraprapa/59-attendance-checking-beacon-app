import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCheckerPage } from './add-checker.page';

describe('AddCheckerPage', () => {
  let component: AddCheckerPage;
  let fixture: ComponentFixture<AddCheckerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCheckerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCheckerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
