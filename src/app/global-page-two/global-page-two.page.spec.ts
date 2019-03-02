import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPageTwoPage } from './global-page-two.page';

describe('GlobalPageTwoPage', () => {
  let component: GlobalPageTwoPage;
  let fixture: ComponentFixture<GlobalPageTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalPageTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPageTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
