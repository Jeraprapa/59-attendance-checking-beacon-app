import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCheckPage } from './member-check.page';

describe('MemberCheckPage', () => {
  let component: MemberCheckPage;
  let fixture: ComponentFixture<MemberCheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberCheckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
