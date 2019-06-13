import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinReportPage } from './join-report.page';

describe('JoinReportPage', () => {
  let component: JoinReportPage;
  let fixture: ComponentFixture<JoinReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
