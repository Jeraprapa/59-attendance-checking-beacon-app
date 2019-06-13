import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComEventPage } from './com-event.page';

describe('ComEventPage', () => {
  let component: ComEventPage;
  let fixture: ComponentFixture<ComEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
