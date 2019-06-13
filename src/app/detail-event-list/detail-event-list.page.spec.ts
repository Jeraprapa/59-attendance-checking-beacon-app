import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEventListPage } from './detail-event-list.page';

describe('DetailEventListPage', () => {
  let component: DetailEventListPage;
  let fixture: ComponentFixture<DetailEventListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEventListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEventListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
