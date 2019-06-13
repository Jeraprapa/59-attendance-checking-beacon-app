import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinDetailReportPage } from './join-detail-report.page';

describe('JoinDetailReportPage', () => {
  let component: JoinDetailReportPage;
  let fixture: ComponentFixture<JoinDetailReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinDetailReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinDetailReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
