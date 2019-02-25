import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPageOnePage } from './global-page-one.page';

describe('GlobalPageOnePage', () => {
  let component: GlobalPageOnePage;
  let fixture: ComponentFixture<GlobalPageOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalPageOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPageOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
