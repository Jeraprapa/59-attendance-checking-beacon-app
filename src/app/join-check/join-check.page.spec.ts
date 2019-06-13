import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinCheckPage } from './join-check.page';

describe('JoinCheckPage', () => {
  let component: JoinCheckPage;
  let fixture: ComponentFixture<JoinCheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinCheckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
