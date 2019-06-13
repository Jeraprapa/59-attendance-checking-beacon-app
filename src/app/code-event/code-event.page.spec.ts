import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEventPage } from './code-event.page';

describe('CodeEventPage', () => {
  let component: CodeEventPage;
  let fixture: ComponentFixture<CodeEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
