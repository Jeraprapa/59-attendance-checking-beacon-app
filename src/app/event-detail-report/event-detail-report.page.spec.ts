import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailReportPage } from './event-detail-report.page';

describe('EventDetailReportPage', () => {
  let component: EventDetailReportPage;
  let fixture: ComponentFixture<EventDetailReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDetailReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
