import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpointReportPage } from './checkpoint-report.page';

describe('CheckpointReportPage', () => {
  let component: CheckpointReportPage;
  let fixture: ComponentFixture<CheckpointReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckpointReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckpointReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
