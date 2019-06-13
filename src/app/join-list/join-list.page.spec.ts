import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinListPage } from './join-list.page';

describe('JoinListPage', () => {
  let component: JoinListPage;
  let fixture: ComponentFixture<JoinListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
