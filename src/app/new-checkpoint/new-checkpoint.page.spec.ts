import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCheckpointPage } from './new-checkpoint.page';

describe('NewCheckpointPage', () => {
  let component: NewCheckpointPage;
  let fixture: ComponentFixture<NewCheckpointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCheckpointPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCheckpointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
