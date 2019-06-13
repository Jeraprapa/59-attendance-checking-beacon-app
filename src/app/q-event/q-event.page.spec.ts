import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QEventPage } from './q-event.page';

describe('QEventPage', () => {
  let component: QEventPage;
  let fixture: ComponentFixture<QEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
