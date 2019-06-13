import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinListEventPage } from './join-list-event.page';

describe('JoinListEventPage', () => {
  let component: JoinListEventPage;
  let fixture: ComponentFixture<JoinListEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinListEventPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinListEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
