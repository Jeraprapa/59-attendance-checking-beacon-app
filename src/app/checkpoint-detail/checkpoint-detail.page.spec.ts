import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpointDetailPage } from './checkpoint-detail.page';

describe('CheckpointDetailPage', () => {
  let component: CheckpointDetailPage;
  let fixture: ComponentFixture<CheckpointDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckpointDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckpointDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
